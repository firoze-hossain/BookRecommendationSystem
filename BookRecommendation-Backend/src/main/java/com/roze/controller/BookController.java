package com.roze.controller;

import com.roze.entity.Book;
import com.roze.entity.SearchHistory;
import com.roze.entity.User;
import com.roze.service.AuthenticationService;
import com.roze.service.BookService;
import com.roze.service.SearchHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("books")
public class BookController {
    @Autowired
    private BookService bookService;

    @Autowired
    private SearchHistoryService searchHistoryService;

    @Autowired
    private AuthenticationService userService;

    @GetMapping("/search")
    public List<Book> searchBooks(@RequestParam String query, Authentication authentication) {
        List<Book> books = bookService.searchBooks(query);
        User user = userService.findByUsername(authentication.getName()).orElseThrow(() -> new RuntimeException("User not found"));
        for (Book book : books) {
            SearchHistory searchHistory = new SearchHistory();
            searchHistory.setUser(user);
            Optional<Book> existingBook = bookService.findByTitleAndAuthor(book.getTitle(), book.getAuthor());
            if (existingBook.isPresent()) {
                searchHistory.setBook(existingBook.get());
            } else {
                book.setUser(user);
                bookService.saveBook(book);
                searchHistory.setBook(book);
            }

            searchHistoryService.saveSearchHistory(searchHistory);
        }
        return books;
    }

    @GetMapping("/history")
    public List<SearchHistory> getSearchHistory(Authentication authentication) {
        User user = userService.findByUsername(authentication.getName()).orElseThrow(() -> new RuntimeException("User not found"));
        return searchHistoryService.getSearchHistoryByUser(user);
    }

    @GetMapping("/recommendations")
    public ResponseEntity<?> getRecommendations(@RequestParam String genre, Authentication authentication) {
        User user = userService.findByUsername(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Book> recommendedBooks = searchHistoryService.getRecommendationsByUser(user, genre);
        return ResponseEntity.ok(recommendedBooks);
    }
}

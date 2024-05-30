package com.roze.service;

import com.roze.entity.Book;
import com.roze.entity.SearchHistory;
import com.roze.entity.User;
import com.roze.repository.SearchHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SearchHistoryService {
    @Autowired
    private SearchHistoryRepository searchHistoryRepository;
    @Autowired
    private BookService bookService;

    public SearchHistory saveSearchHistory(SearchHistory searchHistory) {
        if (searchHistory.getBook().getId() == null) {
            Book savedBook = bookService.saveBook(searchHistory.getBook());
            searchHistory.setBook(savedBook);
        }
        if (searchHistory.getSearchDate() == null) {
            searchHistory.setSearchDate(LocalDateTime.now());
        }
        return searchHistoryRepository.save(searchHistory);
    }

    public List<Book> getRecommendationsByUser(User user, String genre) {
        List<SearchHistory> userSearchHistory = searchHistoryRepository.findByUserAndBookGenre(user, genre);
        List<Book> topRatedBooks = bookService.getTopRatedBooksByGenre(genre);
        List<Book> recommendedBooks = userSearchHistory.stream()
                .map(SearchHistory::getBook)
                .distinct()
                .collect(Collectors.toList());

        recommendedBooks.addAll(topRatedBooks);

        return recommendedBooks.stream().distinct().collect(Collectors.toList());
    }

    public List<SearchHistory> getSearchHistoryByUser(User user) {
        return searchHistoryRepository.findByUser(user);
    }
}

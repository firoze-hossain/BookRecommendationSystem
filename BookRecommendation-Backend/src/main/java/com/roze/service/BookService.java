package com.roze.service;

import com.roze.dto.GoogleBookItem;
import com.roze.dto.GoogleBooksApiResponse;
import com.roze.entity.Book;
import com.roze.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Optional<Book> findByTitleAndAuthor(String title, String author) {
        return bookRepository.findByTitleAndAuthor(title, author);
    }

    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${google.books.api.url}")
    private String googleBooksApiUrl;

    @Value("${google.books.api.key}")
    private String apiKey;

    public List<Book> searchBooks(String query) {
        String url = googleBooksApiUrl + query + "&key=" + apiKey;
        GoogleBooksApiResponse response = restTemplate.getForObject(url, GoogleBooksApiResponse.class);

        if (response != null && response.getItems() != null) {
            List<Book> books = new ArrayList<>();
            for (GoogleBookItem item : response.getItems()) {
                Book book = new Book();
                book.setTitle(item.getVolumeInfo().getTitle());
                book.setAuthor(item.getVolumeInfo().getAuthors() != null ? String.join(", ", item.getVolumeInfo().getAuthors()) : "Unknown Author");
                book.setThumbnail(item.getVolumeInfo().getImageLinks() != null ? item.getVolumeInfo().getImageLinks().getThumbnail() : "");

                if (item.getVolumeInfo().getCategories() != null && !item.getVolumeInfo().getCategories().isEmpty()) {
                    book.setGenre(item.getVolumeInfo().getCategories().get(0));
                } else {
                    book.setGenre("Unknown Genre");
                }

                books.add(book);
            }
            return books;
        } else {
            return new ArrayList<>();
        }
    }

    public List<Book> getTopRatedBooksByGenre(String genre) {
        String url = googleBooksApiUrl + "subject:" + genre + "&orderBy=relevance&key=" + apiKey;
        GoogleBooksApiResponse response = restTemplate.getForObject(url, GoogleBooksApiResponse.class);

        if (response != null && response.getItems() != null) {
            List<Book> books = new ArrayList<>();
            for (GoogleBookItem item : response.getItems()) {
                Book book = new Book();
                book.setTitle(item.getVolumeInfo().getTitle());
                book.setAuthor(item.getVolumeInfo().getAuthors() != null ? String.join(", ", item.getVolumeInfo().getAuthors()) : "Unknown Author");
                book.setThumbnail(item.getVolumeInfo().getImageLinks() != null ? item.getVolumeInfo().getImageLinks().getThumbnail() : "");
                books.add(book);
            }
            return books;
        } else {
            return new ArrayList<>();
        }
    }
}

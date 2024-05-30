package com.roze.repository;

import com.roze.entity.SearchHistory;
import com.roze.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SearchHistoryRepository extends JpaRepository<SearchHistory, Long> {
    List<SearchHistory> findByUser(User user);

    @Query("SELECT sh FROM SearchHistory sh JOIN sh.book b WHERE sh.user = :user AND b.genre = :genre")
    List<SearchHistory> findByUserAndBookGenre(User user, String genre);
}
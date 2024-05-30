package com.roze.repository;

import com.roze.entity.SearchHistory;
import com.roze.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SearchHistoryRepository extends JpaRepository<SearchHistory, Long> {
    List<SearchHistory> findByUser(User user);
}
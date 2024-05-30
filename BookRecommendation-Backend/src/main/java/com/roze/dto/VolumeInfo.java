package com.roze.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VolumeInfo {
    private String title;
    private List<String> authors;
    private ImageLinks imageLinks;

}

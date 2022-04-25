package com.emt.lab2.demo.Model.DTO;

import com.emt.lab2.demo.Model.Enumeration.Category;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
public class BookDTO {

    private String name;

    private Category category;

    private Long author;

    private Integer availableCopies;

    public BookDTO(String name, Category category, Long author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }
}

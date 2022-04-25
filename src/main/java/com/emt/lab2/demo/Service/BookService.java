package com.emt.lab2.demo.Service;

import com.emt.lab2.demo.Model.Author;
import com.emt.lab2.demo.Model.Book;
import com.emt.lab2.demo.Model.DTO.BookDTO;
import com.emt.lab2.demo.Model.Enumeration.Category;

import java.util.List;
import java.util.Optional;

public interface BookService {

    List<Book> findAll();

    Optional<Book> findById(Long id);

    Optional<Book> findByName(String name);

    Optional<Book> save(String name, Category category, Long authorId, Integer availableCopies);

    Optional<Book> edit(Long id, String name, Category category, Long authorId, Integer availableCopies);

    void deleteById(Long id);

    Optional<Book> edit(Long id,BookDTO book);

    Optional<Book> save(BookDTO book);

    Optional<Book> reduceCopies(Long id);

}

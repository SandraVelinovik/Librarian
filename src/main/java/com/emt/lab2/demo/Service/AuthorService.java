package com.emt.lab2.demo.Service;

import com.emt.lab2.demo.Model.Author;

import java.util.List;
import java.util.Optional;

public interface AuthorService {

    Optional<Author> findById(Long id);

    List<Author> findAll();
}

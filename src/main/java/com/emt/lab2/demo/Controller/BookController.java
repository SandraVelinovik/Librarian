package com.emt.lab2.demo.Controller;

import com.emt.lab2.demo.Model.Book;
import com.emt.lab2.demo.Model.DTO.BookDTO;
import com.emt.lab2.demo.Model.Enumeration.Category;
import com.emt.lab2.demo.Service.BookService;
import lombok.experimental.PackagePrivate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/books")
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> getAllBooks(){
        return bookService.findAll();
    }

    @GetMapping("/enums")
    public Category[] getAllEnums(){
        return Category.values();
    }

    @GetMapping("/taken/{id}")
    public ResponseEntity<Book> reduceCopies(@PathVariable Long id) {
        return this.bookService.reduceCopies(id)
                .map(b -> ResponseEntity.ok().body(b))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Book> add(@RequestBody BookDTO book) {
        return this.bookService.save(book)
                .map(b -> ResponseEntity.ok().body(b))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Book> edit(@PathVariable Long id,@RequestBody BookDTO book) {
        return this.bookService.edit(id,book)
                .map(b -> ResponseEntity.ok().body(b))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        this.bookService.deleteById(id);
    }


}

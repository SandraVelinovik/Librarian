package com.emt.lab2.demo.Service;

import com.emt.lab2.demo.Model.Author;
import com.emt.lab2.demo.Model.Book;
import com.emt.lab2.demo.Model.DTO.BookDTO;
import com.emt.lab2.demo.Model.Enumeration.Category;
import com.emt.lab2.demo.Model.Exception.GeneralException;
import com.emt.lab2.demo.Repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final AuthorService authorService;

    public BookServiceImpl(BookRepository bookRepository, AuthorService authorService) {
        this.bookRepository = bookRepository;
        this.authorService = authorService;
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public Optional<Book> findByName(String name) {
        return bookRepository.findByName(name);
    }

    @Override
    public Optional<Book> save(String name, Category category, Long authorId, Integer availableCopies) {
        Author author = authorService.findById(authorId).orElseThrow(() -> new GeneralException("No author found!"));
        Book book = new Book(name,category,author,availableCopies);
        return Optional.of(bookRepository.save(book));
    }

    @Override
    public Optional<Book> edit(Long id, String name, Category category, Long authorId, Integer availableCopies) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new GeneralException("Book not found!"));
        Author author = authorService.findById(authorId).orElseThrow(() -> new GeneralException("No author found!"));
        book.setName(name);
        book.setCategory(category);
        book.setAuthor(author);
        book.setAvailableCopies(availableCopies);

        return Optional.of(bookRepository.save(book));
    }

    @Override
    public void deleteById(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public Optional<Book> edit(Long id, BookDTO book) {
        Book b = bookRepository.findById(id).orElseThrow(() -> new GeneralException("Book not found!"));
        System.out.println(book.getAuthor());
        Author author = authorService.findById(book.getAuthor()).orElseThrow(() -> new GeneralException("No author found!"));
        b.setName(book.getName());
        b.setCategory(book.getCategory());
        b.setAuthor(author);
        b.setAvailableCopies(book.getAvailableCopies());

        return Optional.of(bookRepository.save(b));
    }

    @Override
    public Optional<Book> save(BookDTO book) {
        Author author = authorService.findById(book.getAuthor()).orElseThrow(() -> new GeneralException("No author found!"));
        Book b = new Book(book.getName(),book.getCategory(),author,book.getAvailableCopies());
        return Optional.of(bookRepository.save(b));    }

    @Override
    public Optional<Book> reduceCopies(Long id) {
        Book b = bookRepository.findById(id).orElseThrow(() -> new GeneralException("No book found!"));
        b.setAvailableCopies(b.getAvailableCopies()-1);
        return Optional.of(bookRepository.save(b));
    }
}
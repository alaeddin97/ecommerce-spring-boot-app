package com.justatech.ecommerce.controllers;

import com.justatech.ecommerce.dao.ProductRepository;
import com.justatech.ecommerce.domain.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class ProductController {
    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/products")
    public ResponseEntity<Page<Product>> getProducts(@RequestParam("page") int page, @RequestParam("size") int size) {
       Pageable pageable = Pageable.ofSize(size).withPage(page);
       Page<Product> products = productRepository.findAll(pageable);
       return ResponseEntity.ok(products);
    }

    @GetMapping("/categories/{id}/products")
    public ResponseEntity<Page<Product>> getProductsByCategory(@PathVariable("id") Long id, @RequestParam("page") int page, @RequestParam("size") int size) {
        Pageable pageable = Pageable.ofSize(size).withPage(page);
        Page<Product> products = productRepository.findByCategoryId(id, pageable);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long id) {
        Product product = productRepository.findById(id);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.noContent().build();
        }
    }
}

package com.justatech.ecommerce.controllers;

import com.justatech.ecommerce.dao.ProductRepository;
import com.justatech.ecommerce.domain.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
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
    public List<Product> getProducts(Pageable pageable) {
       return productRepository.findAll(pageable).getContent();
    }
}

package com.justatech.ecommerce.controllers;

import com.justatech.ecommerce.domain.Product;
import com.justatech.ecommerce.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
       return productService.findAll();
    }

    @GetMapping("/category/{categoryId}")
    List<Product> getProductsByCategoryId(@PathVariable("categoryId") Long categoryId) {
        return productService.findByCategoryId(categoryId);
    }
}

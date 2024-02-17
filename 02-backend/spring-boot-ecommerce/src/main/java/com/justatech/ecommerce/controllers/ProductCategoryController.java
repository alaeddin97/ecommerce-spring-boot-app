package com.justatech.ecommerce.controllers;

import com.justatech.ecommerce.domain.ProductCategory;
import com.justatech.ecommerce.services.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class ProductCategoryController {

    final private ProductCategoryService productCategoryService;

    @Autowired
    public ProductCategoryController(ProductCategoryService productCategoryService) {
        this.productCategoryService = productCategoryService;
    }

    @GetMapping
    public List<ProductCategory> getCategories() {
        return productCategoryService.findAll();
    }
}

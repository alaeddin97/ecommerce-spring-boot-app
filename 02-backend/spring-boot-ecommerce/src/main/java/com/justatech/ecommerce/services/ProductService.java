package com.justatech.ecommerce.services;

import com.justatech.ecommerce.domain.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAll();

    List<Product> findByCategoryId(Long categoryId);
}

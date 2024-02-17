package com.justatech.ecommerce.services;

import com.justatech.ecommerce.domain.ProductCategory;

import java.util.List;

public interface ProductCategoryService {
    List<ProductCategory> findAll();
}

package com.justatech.ecommerce.services;

import com.justatech.ecommerce.dao.ProductCategoryRepository;
import com.justatech.ecommerce.domain.ProductCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductCategoryServiceImpl implements ProductCategoryService{

    private final ProductCategoryRepository productCategoryRepository;

    @Autowired
    private ProductCategoryServiceImpl(ProductCategoryRepository productCategoryRepository) {
     this.productCategoryRepository = productCategoryRepository;
    }
    @Override
    public List<ProductCategory> findAll() {
        return productCategoryRepository.findAll();
    }
}

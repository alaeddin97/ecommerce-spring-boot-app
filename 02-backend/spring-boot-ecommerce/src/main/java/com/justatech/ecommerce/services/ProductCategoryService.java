package com.justatech.ecommerce.services;

import com.justatech.ecommerce.domain.ProductCategory;
import com.justatech.ecommerce.repositories.ProductCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductCategoryService {

    private final ProductCategoryRepository productCategoryRepository;
    public ProductCategoryService(ProductCategoryRepository productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }

    public void save(ProductCategory productCategory) {
        productCategoryRepository.save(productCategory);
    }

    public Optional<ProductCategory> getProductCategoryById(Long id) {
        return productCategoryRepository.findById(id);
    }
}

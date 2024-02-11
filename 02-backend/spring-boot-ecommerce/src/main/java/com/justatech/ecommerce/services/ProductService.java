package com.justatech.ecommerce.services;

import com.justatech.ecommerce.entities.Product;
import com.justatech.ecommerce.repositories.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public void save(Product product) {
        productRepository.save(product);
    }
}

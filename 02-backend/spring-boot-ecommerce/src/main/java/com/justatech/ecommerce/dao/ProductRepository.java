package com.justatech.ecommerce.dao;

import com.justatech.ecommerce.domain.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
    Page<Product> findAll(Pageable pageable);
    @Query("SELECT p FROM Product p WHERE p.productCategory.id = :id")
    Page<Product> findByCategoryId(Long id, Pageable pageable);
    Product findById(Long id);
}

package com.justatech.ecommerce.controllers;

import com.justatech.ecommerce.domain.Product;
import com.justatech.ecommerce.services.ProductService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
class ProductControllerTest {

    @Mock
    private ProductService mockProductService;

    @InjectMocks
    private ProductController productController;

    @Test
    public void should_return_all_products() {
        //Given
        Product book = new Product();
        book.setId(1L);
        book.setName("Java Guru");
        Product mug = new Product();
        mug.setId(2L);
        mug.setName("Gnu..Linux");
        List<Product> expectedProducts = Arrays.asList(book, mug);

        Mockito.when(mockProductService.findAll()).thenReturn(expectedProducts);

        //When
        List<Product> actualProducts = productController.getProducts();

        //Then
        Assertions.assertIterableEquals(expectedProducts, actualProducts);
    }
}
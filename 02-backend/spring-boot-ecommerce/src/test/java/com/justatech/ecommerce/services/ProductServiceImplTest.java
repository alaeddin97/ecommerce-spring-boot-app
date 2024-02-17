package com.justatech.ecommerce.services;

import com.justatech.ecommerce.dao.ProductRepository;
import com.justatech.ecommerce.domain.Product;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;

@ExtendWith(MockitoExtension.class)
class ProductServiceImplTest {

    @Mock
    private ProductRepository mockProductRepository;

    @InjectMocks
    private ProductServiceImpl productServiceImpl;

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

        Mockito.when(mockProductRepository.findAll()).thenReturn(expectedProducts);

        //When
        List<Product> actualProducts = productServiceImpl.findAll();

        //Then
        Assertions.assertIterableEquals(expectedProducts, actualProducts);
    }
}
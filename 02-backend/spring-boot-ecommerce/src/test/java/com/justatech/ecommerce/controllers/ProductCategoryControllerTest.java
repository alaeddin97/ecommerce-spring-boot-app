package com.justatech.ecommerce.controllers;

import com.justatech.ecommerce.domain.ProductCategory;
import com.justatech.ecommerce.services.ProductCategoryService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
class ProductCategoryControllerTest {

    @Mock
    private ProductCategoryService mockProductCategoryService;

    @InjectMocks
    private ProductCategoryController productCategoryController;

    @Test
    public void should_return_all_categories() {
        //Given
        ProductCategory booksCategory = new ProductCategory(1L, "BOOKS");
        ProductCategory mugsCategory = new ProductCategory(2L, "MUGS");
        List<ProductCategory> expectedCategories = Arrays.asList(booksCategory, mugsCategory);

        Mockito.when(mockProductCategoryService.findAll()).thenReturn(expectedCategories);

        //When
        List<ProductCategory> actualCategories = productCategoryController.getCategories();

        //Then
        Assertions.assertIterableEquals(actualCategories, expectedCategories);
    }
}
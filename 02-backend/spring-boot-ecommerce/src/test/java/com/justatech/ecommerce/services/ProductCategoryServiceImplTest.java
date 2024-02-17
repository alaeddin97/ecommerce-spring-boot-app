package com.justatech.ecommerce.services;

import com.justatech.ecommerce.dao.ProductCategoryRepository;
import com.justatech.ecommerce.domain.ProductCategory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
class ProductCategoryServiceImplTest {

    @Mock
    private ProductCategoryRepository mockProductCategoryRepository;

    @InjectMocks
    private ProductCategoryServiceImpl productCategoryServiceImpl;

    @Test
    public void should_return_all_product_categories() {
        //Given
        ProductCategory booksCategory = new ProductCategory(1L, "BOOKS");
        ProductCategory mugsCategory = new ProductCategory(2L, "MUGS");
        List<ProductCategory> expectedCategories = Arrays.asList(booksCategory, mugsCategory);

        Mockito.when(mockProductCategoryRepository.findAll()).thenReturn(expectedCategories);

        //When
        List<ProductCategory> actualCategories = productCategoryServiceImpl.findAll();

        //Then
        Assertions.assertIterableEquals(expectedCategories, actualCategories);
    }

}
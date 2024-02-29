package com.justatech.ecommerce.controllers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.justatech.ecommerce.domain.ProductCategory;
import com.justatech.ecommerce.services.ProductCategoryService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ProductCategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Mock
    private ProductCategoryService mockProductCategoryService;

    @InjectMocks
    private ProductCategoryController productCategoryController;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(productCategoryController).build();
    }

    @Test
    public void should_return_all_categories() throws Exception {
        //Given
        ProductCategory booksCategory = new ProductCategory(1L, "BOOKS");
        ProductCategory mugsCategory = new ProductCategory(2L, "MUGS");
        List<ProductCategory> expectedCategories = Arrays.asList(booksCategory, mugsCategory);

        Mockito.when(mockProductCategoryService.findAll()).thenReturn(expectedCategories);

        //When
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/categories")).andExpect(status().isOk()).andReturn();

        //Then
        String content = mvcResult.getResponse().getContentAsString();
        ObjectMapper objectMapper = new ObjectMapper();
        List<ProductCategory> actualProductCategories = objectMapper.readValue(content, new TypeReference<List<ProductCategory>>() {
        });
        Assertions.assertIterableEquals(actualProductCategories, expectedCategories);
    }
}
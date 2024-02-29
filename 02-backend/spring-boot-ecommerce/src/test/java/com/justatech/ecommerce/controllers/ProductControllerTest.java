package com.justatech.ecommerce.controllers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.justatech.ecommerce.domain.Product;
import com.justatech.ecommerce.services.ProductService;
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
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Mock
    private ProductService mockProductService;

    @InjectMocks
    private ProductController productController;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(productController).build();
    }

    @Test
    public void should_return_all_products() throws Exception {
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
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/products")).andExpect(status().isOk()).andReturn();

        //Then
        List<Product> products = new ObjectMapper().readValue(mvcResult.getResponse().getContentAsString(), new TypeReference<List<Product>>() {
        });
        Assertions.assertIterableEquals(expectedProducts, products);
    }
}
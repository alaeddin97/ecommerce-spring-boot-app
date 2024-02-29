package com.justatech.ecommerce.controllers.integration_tests;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.justatech.ecommerce.controllers.ProductController;
import com.justatech.ecommerce.dao.ProductRepository;
import com.justatech.ecommerce.domain.Product;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import com.fasterxml.jackson.datatype.jsr310.*;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@TestPropertySource("/application-test.properties")
@AutoConfigureMockMvc
public class ProductControllerIntegrationTest {

    @Value("${sql.script.create.categories}")
    private String sqlAddCategories;
    @Value("${sql.script.create.products}")
    private String sqlAddProducts;
    @Value("${sql.script.delete.products}")
    private String sqlDeleteProducts;
    @Value("${sql.script.delete.categories}")
    private String sqlDeleteCategories;

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductController productController;

    @BeforeEach
    public void setup() {
        jdbcTemplate.execute(sqlDeleteProducts);
        jdbcTemplate.execute(sqlDeleteCategories);
    }

    @Test
    public void should_get_products_in_db() throws Exception {
        //Given
        jdbcTemplate.execute(sqlAddCategories);
        jdbcTemplate.execute(sqlAddProducts);

        //When
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/products"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(1))).andReturn();

        //Then
        List<Product> expectedProducts = productRepository.findAll();
        String content = mvcResult.getResponse().getContentAsString();
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        List<Product> actualProducts = objectMapper.readValue(content, new TypeReference<List<Product>>() {});
        Assertions.assertEquals(expectedProducts, actualProducts);
    }

}

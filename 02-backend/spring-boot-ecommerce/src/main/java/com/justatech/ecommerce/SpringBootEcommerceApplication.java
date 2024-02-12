package com.justatech.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootEcommerceApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringBootEcommerceApplication.class, args);
	}

/*	@Bean
	public CommandLineRunner demo(ProductCategoryService productCategoryService, ProductService productService) {
		return args -> {
			ProductCategory productCategory = new ProductCategory("BOOKS");
			productCategoryService.save(productCategory);
			Optional<ProductCategory> productCategoryOptional = productCategoryService.getProductCategoryById(1L);

			Product product = new Product("BOOK-TECH-1000", "JavaScript - The Fun Parts", "Learn JavaScript", new BigDecimal(19.99),
					"assets/images/products/placeholder.png", true, 100, LocalDateTime.now(), null, productCategoryOptional.get());
			productService.save(product);

			Product product1 = new Product("BOOK-TECH-1001", "Spring Framework Tutorial", "Learn Spring", new BigDecimal(29.99),
					"assets/images/products/placeholder.png",true,100, LocalDateTime.now(), LocalDateTime.now(),
					productCategoryOptional.get());
			productService.save(product1);
		};
	}*/

}
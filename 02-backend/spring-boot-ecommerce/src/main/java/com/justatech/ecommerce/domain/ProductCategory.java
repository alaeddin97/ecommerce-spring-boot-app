package com.justatech.ecommerce.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "ProductCategory")
@Table(name = "product_category")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductCategory {
    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "category_name")
    private String categoryName;
}

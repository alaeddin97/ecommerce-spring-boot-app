package com.justatech.ecommerce.domain;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity(name = "Product")
@Table(name = "product")
@Data
public class Product {
    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "sku")
    private String sku;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "unit_price")
    private BigDecimal unitPrice;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "active")
    private Boolean active;
    @Column(name = "units_in_stock")
    private Integer unitsInStock;
    @Column(name = "date_created")
    @CreationTimestamp
    private LocalDateTime dateCreated;
    @Column(name = "last_updated")
    @UpdateTimestamp
    private LocalDateTime lastUpdated;
    @JoinColumn(name = "category_id")
    @ManyToOne(
            cascade = {CascadeType.MERGE},
            fetch = FetchType.EAGER
    )
    private ProductCategory productCategory;
}

package com.justatech.ecommerce.entities;

import jakarta.persistence.*;

@Entity(name = "ProductCategory")
@Table(name = "product_category")
public class ProductCategory {
    @Column(name = "id", insertable = false, updatable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "category_name")
    private String categoryName;

    public ProductCategory() {
    }

    public ProductCategory(String categoryName) {
        this.categoryName = categoryName;
    }

    public ProductCategory(Long id, String categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    @Override
    public String toString() {
        return "ProductCategory{" +
                "id=" + id +
                ", categoryName='" + categoryName + '\'' +
                '}';
    }
}

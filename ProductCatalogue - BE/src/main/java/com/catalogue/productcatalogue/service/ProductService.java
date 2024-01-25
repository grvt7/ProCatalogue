package com.catalogue.productcatalogue.service;

import com.catalogue.productcatalogue.model.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProduct(int productId);
    List<Product> postProduct(List<Product> products);
    Product putProduct(Product product);
    Product delete(int productId);

    List<Product> runQuery(String query);
}

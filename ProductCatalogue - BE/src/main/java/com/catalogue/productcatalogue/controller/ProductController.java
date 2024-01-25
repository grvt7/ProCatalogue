package com.catalogue.productcatalogue.controller;

import com.catalogue.productcatalogue.model.Product;
import com.catalogue.productcatalogue.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return this.productService.getAllProducts();
    }

    @GetMapping("/product/{query}")
    public List<Product> getQuery(@PathVariable String query) {
        return this.productService.runQuery(query);
    }

    @GetMapping("/products/{productId}")
    public Product getProduct(@PathVariable String productId) {
        return this.productService.getProduct(Integer.parseInt(productId));
    }

    @PostMapping("/products")
    public List<Product> postProduct(@RequestBody List<Product> product) {
        return this.productService.postProduct(product);
    }

    @PutMapping("/products")
    public Product putProduct(@RequestBody Product product) {
        return this.productService.putProduct(product);
    }

    @DeleteMapping("/products/{productId}")
    public Product deleteProduct(@PathVariable String productId) {
        return this.productService.delete(Integer.parseInt(productId));
    }
}

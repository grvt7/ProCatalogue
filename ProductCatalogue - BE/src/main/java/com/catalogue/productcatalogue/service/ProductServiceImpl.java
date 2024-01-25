package com.catalogue.productcatalogue.service;

import com.catalogue.productcatalogue.dbdao.ProductDao;
import com.catalogue.productcatalogue.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{
    private final ProductDao productDao;

    public ProductServiceImpl(ProductDao productDao) {
        this.productDao = productDao;
    }

    @Override
    public List<Product> getAllProducts() {
        return this.productDao.findAll();
    }

    @Override
    public Product getProduct(int productId) {
        return this.productDao.getById(productId);
    }

    @Override
    public List<Product> postProduct(List<Product> products) {
        return this.productDao.saveAll(products);
    }

    @Override
    public Product putProduct(Product product) {
        return this.productDao.save(product);
    }

    @Override
    public Product delete(int productId) {
        Product entity = this.productDao.getById(productId);
        this.productDao.delete(entity);
        return entity;
    }

    @Override
    public List<Product> runQuery(String query) {
        return this.productDao.findProductByQuery(query);
    }
}

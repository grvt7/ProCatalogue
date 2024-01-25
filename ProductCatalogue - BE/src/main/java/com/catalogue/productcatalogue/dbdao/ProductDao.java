package com.catalogue.productcatalogue.dbdao;

import com.catalogue.productcatalogue.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductDao extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT * FROM Product p WHERE p.product_code=:query " +
            "or p.product_name=:query or p.product_brand=:query " +
            "or p.type=:query", nativeQuery = true)
    List<Product> findProductByQuery(@Param("query") String query);
}

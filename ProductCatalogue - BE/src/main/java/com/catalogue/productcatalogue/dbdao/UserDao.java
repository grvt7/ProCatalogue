package com.catalogue.productcatalogue.dbdao;

import com.catalogue.productcatalogue.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, String> {
}

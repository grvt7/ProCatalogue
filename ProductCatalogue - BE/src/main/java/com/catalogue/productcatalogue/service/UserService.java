package com.catalogue.productcatalogue.service;

import com.catalogue.productcatalogue.model.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();
    User getUser(String id);
    User postUser(User user);
    User putUser(User user);
    User deleteUser(String id);

    boolean checkUser(String id);
}

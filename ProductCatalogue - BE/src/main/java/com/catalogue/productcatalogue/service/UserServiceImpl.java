package com.catalogue.productcatalogue.service;

import com.catalogue.productcatalogue.dbdao.UserDao;
import com.catalogue.productcatalogue.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    private final UserDao userDao;

    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public List<User> getUsers() {
        return this.userDao.findAll();
    }

    @Override
    public User getUser(String id) {
        return this.userDao.getById(id);
    }

    @Override
    public User postUser(User user) {
        return this.userDao.save(user);
    }

    @Override
    public User putUser(User user) {
        return this.userDao.save(user);
    }

    @Override
    public User deleteUser(String id) {
        User entity = this.userDao.getById(id);
        this.userDao.delete(entity);
        return entity;
    }

    @Override
    public boolean checkUser(String id) {
        return this.userDao.existsById(id);
    }
}

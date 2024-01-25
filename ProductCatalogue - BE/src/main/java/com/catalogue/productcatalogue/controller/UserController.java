package com.catalogue.productcatalogue.controller;

import com.catalogue.productcatalogue.model.User;
import com.catalogue.productcatalogue.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getUsersList() {
        return this.userService.getUsers();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable String id) {
        return this.userService.getUser(id);
    }

    @GetMapping("/uCheck/{id}")
    public boolean checkUser(@PathVariable String id) {
        return this.userService.checkUser(id);
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return this.userService.postUser(user);
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user) {
        return this.userService.putUser(user);
    }

    @DeleteMapping("/users/{id}")
    public User deleteUser(@PathVariable String id) {
        return this.userService.deleteUser(id);
    }
}

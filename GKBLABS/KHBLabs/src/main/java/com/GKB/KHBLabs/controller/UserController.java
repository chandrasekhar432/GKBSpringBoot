package com.GKB.KHBLabs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.GKB.KHBLabs.entity.User;
import com.GKB.KHBLabs.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService service;
	
	
	@PostMapping("/save")
	public User save(@RequestBody User user) {
		return service.save(user);
	}
	
	@GetMapping("/getAll")
	public List<User> getAll(){
		return service.getAll();
	}

}

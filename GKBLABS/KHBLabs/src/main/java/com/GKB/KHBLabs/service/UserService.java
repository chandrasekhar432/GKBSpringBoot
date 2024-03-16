package com.GKB.KHBLabs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GKB.KHBLabs.dao.UserDao;
import com.GKB.KHBLabs.entity.User;

@Service
public class UserService {
	
	@Autowired
	UserDao dao;
	
	public User save(User user) {
		return dao.save(user);
	}
	
	public List<User> getAll(){
		return dao.getAll();
	}

}

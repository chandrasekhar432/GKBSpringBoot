package com.GKB.KHBLabs.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.GKB.KHBLabs.Repo.UserRepo;
import com.GKB.KHBLabs.entity.User;

@Repository
public class UserDao {
	
	@Autowired
	UserRepo repo;
	
	public User save(User user) {
		 return repo.save(user);
	}
	
	public List<User> getAll(){
		return repo.findAll();
	}

}

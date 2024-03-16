package com.GKB.KHBLabs.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.GKB.KHBLabs.entity.User;

public interface UserRepo extends JpaRepository<User,Integer> {

}

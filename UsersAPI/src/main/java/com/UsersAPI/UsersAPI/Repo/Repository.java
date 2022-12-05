package com.UsersAPI.UsersAPI.Repo;

import org.springframework.data.repository.CrudRepository;

import com.UsersAPI.UsersAPI.Models.User;

public interface Repository extends CrudRepository<User, Integer> {

}

package com.UsersAPI.UsersAPI.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.UsersAPI.UsersAPI.Models.User;
import com.UsersAPI.UsersAPI.Repo.Repository;

@RestController
@RequestMapping(path="/users")
@CrossOrigin
public class Controller {
	
	@Autowired
	private Repository userRepository;
	
	@GetMapping
	public ResponseEntity<List<User>> getAllUsers() throws Exception{
	  List<User> users = (List<User>) userRepository.findAll();
	  return new ResponseEntity<>(users, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<User> postUser(@RequestBody User userPosted) throws Exception{
	  User newUser = userRepository.save(userPosted);
	  return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

}

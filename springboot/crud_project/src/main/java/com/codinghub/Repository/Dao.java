package com.codinghub.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codinghub.Model.Employee;

public interface Dao extends JpaRepository<Employee,Integer>{

	
}

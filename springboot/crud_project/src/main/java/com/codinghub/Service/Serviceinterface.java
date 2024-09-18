package com.codinghub.Service;

import java.util.List;
import java.util.Optional;

import com.codinghub.Model.Employee;

public interface Serviceinterface {

	String save(Employee employee);

	List<Employee> findAll();

	Optional<Employee> findById(Integer e_id);

	String deleteEmployee(Integer e_id);
   
}

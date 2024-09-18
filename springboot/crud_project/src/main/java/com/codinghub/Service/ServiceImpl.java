package com.codinghub.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codinghub.Model.Employee;
import com.codinghub.Repository.Dao;
@Service
public class ServiceImpl implements Serviceinterface  {
	 @Autowired
     public Dao dao;

	public ServiceImpl(Dao dao) {
		super();
		this.dao = dao;
	}


	@Override
	public String save(Employee employee) {
		dao.save(employee);
		return "data inserted sucessfully";
	}

	@Override
	public List<Employee> findAll() {
		
		return dao.findAll();
	}


	@Override
	public Optional<Employee> findById(Integer e_id) {
		
		return dao.findById(e_id);
	}


	@Override
	public String deleteEmployee(Integer e_id) {
	    dao.deleteById(e_id);
	    return "deleted sucessfully";
		
	}




}

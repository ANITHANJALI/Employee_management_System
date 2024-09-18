package com.codinghub.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codinghub.Model.Employee;
import com.codinghub.Model.Information;
import com.codinghub.Service.Serviceinterface;

@CrossOrigin
@RestController
public class MyController {
	 @Autowired
     public Serviceinterface service;

	public MyController(Serviceinterface service) {
		super();
		this.service = service;
	}

	@PostMapping("/employee")
	public Information insert(@RequestBody Employee employee) 
	{
		Information info=new Information();
		if(service.save(employee).endsWith("data inserted sucessfully"))
		{
			info.setMsg("data inserted sucessfully");
			return info;
		}
		return info;
    }
	
	@GetMapping("/employee")
	public List<Employee>getAllEmployee(){
		return service.findAll();
	}
	
	@GetMapping("employee/{e_id}")
    public Optional<Employee> getEmployeeById(@PathVariable Integer e_id) {
    	return service.findById(e_id);
    }
	@DeleteMapping("employee1/{e_id}")
	public boolean deleteEmployee(@PathVariable Integer e_id)
	{
		service.deleteEmployee(e_id);
	    return true;
	}
	
}

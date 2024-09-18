package com.codinghub.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class Employee {
       
	   @Id 
	   @GeneratedValue(strategy = GenerationType.IDENTITY)
       private Integer e_id;
       private String e_name;
       private String e_email;
       private Long e_mobile;
}

package com.reactproject.managementemployee;

import com.reactproject.managementemployee.model.Employee;
import com.reactproject.managementemployee.repository.EmloyeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ManagemenTemployeeApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ManagemenTemployeeApplication.class, args);
	}
	@Autowired
	private EmloyeeRepository emloyeeRepository;
	@Override
	public void run(String... agrs) throws Exception{
//		Employee employee = new Employee();
//		employee.setFirstname("Nguyen");
//		employee.setLastname("Nhan");
//		employee.setEmailid("nguyenthiennhan@gmail.com");
//		emloyeeRepository.save(employee);
//
//		Employee  employee1 = new Employee();
//		employee1.setFirstname("trong");
//		employee1.setLastname("hieu");
//		employee1.setEmailid("lenguyentronghieu@gmail.com");
//		emloyeeRepository.save(employee1);
	}
}

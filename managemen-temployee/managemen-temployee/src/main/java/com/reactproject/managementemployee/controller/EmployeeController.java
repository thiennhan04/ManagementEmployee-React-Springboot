package com.reactproject.managementemployee.controller;

import com.reactproject.managementemployee.exception.ResourceNotFoundException;
import com.reactproject.managementemployee.model.Employee;
import com.reactproject.managementemployee.repository.EmloyeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000/"})
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmloyeeRepository emloyeeRepository;
    @GetMapping
    public List<Employee> getAllEmployee(){
        return emloyeeRepository.findAll();
    }
    @PostMapping
    private Employee createEmployee(@RequestBody Employee employee){
        return emloyeeRepository.save(employee);
    }
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
        Employee employee = emloyeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id));
        return ResponseEntity.ok(employee);
    }
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails){
        Employee updateEmployee = emloyeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id: " + id));
        updateEmployee.setFirstname(employeeDetails.getFirstname());
        updateEmployee.setLastname(employeeDetails.getLastname());
        updateEmployee.setEmailid(employeeDetails.getEmailid());
        emloyeeRepository.save(updateEmployee);
        return ResponseEntity.ok(updateEmployee);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        Employee employee = emloyeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Employee not exist with id:" + id));
        emloyeeRepository.delete(employee);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

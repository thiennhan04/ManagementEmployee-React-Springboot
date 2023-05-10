package com.reactproject.managementemployee.repository;

import com.reactproject.managementemployee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmloyeeRepository extends JpaRepository<Employee,Long> {


}

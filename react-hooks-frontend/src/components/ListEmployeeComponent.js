import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService'
import { Link } from 'react-router-dom'



const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
      getAllEmloyees()
    }, [])
    const getAllEmloyees = ()=>{
      EmployeeService.getAllEmloyees().then((response)=>{
        setEmployees(response.data)
        console.log(response.data);
      }).catch(error=>{
        console.log(error);
      })
    }
    const deleteEmloyee = (employeeId)=>{  
      EmployeeService.deleteEmployee(employeeId).then((response)=>{  
        getAllEmloyees();
      }).catch((error)=>{
        console.log(error);
      })
    }
    return (
    <div className="container">
        <h2 className="text-center">List employees</h2>
        <Link to={"/add-employees"} className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead>
            <th>Employees id</th>
            <th>Employees First Name</th>
            <th>Employees Last Name</th>
            <th>Employees Email id</th>
          </thead>
          <tbody>
            {
              employees.map((employee) =>
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.emailid}</td>
                  <td>
                    <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                    <button className="btn btn-danger" onClick={()=>deleteEmloyee(employee.id)}
                    style={{marginLeft:"10px"}}>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
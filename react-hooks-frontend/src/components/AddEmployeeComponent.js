import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import EmployeeService from '../service/EmployeeService'

const AddEmployeeComponent = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [emailid, setEmailid] = useState('')
  const {id} = useParams();
  const history = useNavigate();
  const  saveOrUpdateEmployee = (e)=>{
      e.preventDefault();
      const employee = {firstname, lastname, emailid}
      if(id){
        EmployeeService.updateEmployee(id, employee).then((respone) =>{
          history('/employees');
        }).catch((err) =>{
          console.log(err);
        })
      }else{
        EmployeeService.createEmployee(employee).then((respone) => {
          console.log(respone.data)
          history('/employees');
        }).catch(error =>{
          console.log(error)
        })
      }
      
  }
  useEffect(()=>{
    EmployeeService.getEmployeeById(id).then((respone) => {
      setFirstName(respone.data.firstname)
      setLastName(respone.data.lastname)
      setEmailid(respone.data.emailid)
    }).catch(error=>{
      console.log(error)
    })
  },[])
  const title = () => {
    if(id){
      return <h2 className="text-center">Update Employee</h2>
    }else{
      return <h2 className="text-center">Add Employee</h2>
    }
  }
  return (
    <div>
      <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
             {
              title()
             }
              <div className="card-body">
                <form>
                  <div className="form=group mb-2">
                    <label className="form-label">FirstName:</label>
                    <input type = "text" placeholder="Enter first name" 
                            name="firstName" className="form-control"
                            value={firstname}
                            onChange={(e)=> setFirstName(e.target.value)}></input>
                  </div>

                  <div className="form=group mb-2">
                    <label className="form-label">FirstName:</label>
                    <input type = "text" placeholder="Enter last name" 
                            name="lastName" className="form-control"
                            value={lastname}
                            onChange={(e)=> setLastName(e.target.value)}></input>
                  </div>

                  <div className="form=group mb-2">
                    <label className="form-label">FirstName:</label>
                    <input type = "text" placeholder="Enter email id" 
                            name="email" className="form-control"
                            value={emailid}
                            onChange={(e)=> setEmailid(e.target.value)}></input>
                  </div>
                  <button className="btn btn-success" onClick={(e)=> saveOrUpdateEmployee(e)}>Submit</button>
                  <Link to="/employees" className="btn btn-danger">Cancel</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent
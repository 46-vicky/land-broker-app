import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFetchCollection } from '../../hooks/useFetchCollection'
import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { IoList } from "react-icons/io5";
import EditEmployee from './EditEmployee';

const EmployeeList = () => {
  const {deleteDataById} = useFetchCollection()
  const [openEditEmployeePopup,setOpenEditEmployeePopup] = useState(false)
  const [editableEmployeeId,setEditableEmployeeId] = useState(null)
  const deleteEmployee = (id)=>{
    deleteDataById("employees",id,responsFun)
  }
  const editEmployee = (id)=>{
    setOpenEditEmployeePopup(true);
    setEditableEmployeeId(id)
  }
  const responsFun = (result)=>{
    console.log(result)
  }
  const allPlans = useSelector((state)=>state.plans.allPlans)
  const allEmployees = useSelector(state => state.employees.allEmployees)
  const plansList = allEmployees.map((employee, index) => {
    let assignedPlan = "";
    allPlans.forEach((plan)=> {
      if(plan.id === employee.assignedPlanId){
         assignedPlan = plan.planName
      }
    })
    return (<tr key={index}><td aria-colspan={2}>{index+1}. {employee.employeeName}</td><td aria-colspan={2}>{employee.employeeMail}</td><td>{assignedPlan}</td><td className="edt-btn"><button className='edit-btn' aria-label="edit-button" onClick={()=>{editEmployee(employee.id)}}><FiEdit /></button></td><td className="del-btn"><button className='delete-btn' aria-label='delete-btn' onClick={()=>deleteEmployee(employee.id)}><FiTrash2 /></button></td></tr>)
  })
  
  return (
    <div className='table-part'>
      {(openEditEmployeePopup && editableEmployeeId !== null)&&(
          <EditEmployee 
            editableEmployeeId = {editableEmployeeId}
            setOpenEditEmployeePopup = {setOpenEditEmployeePopup}
          />
      )
      }
      {(allEmployees.length) ? (
      <>
          <h2 className='list-head'><span><IoList /></span>Employees List</h2>
            <table className='list-cont'>
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Employee Mail</th>
                  <th>Assigned Plan</th>
                </tr>
              </thead>
              <tbody>
                {plansList}
              </tbody>
            </table>
      </>) : (<h2>No Result</h2>)}
    </div>
  )
}

export default EmployeeList
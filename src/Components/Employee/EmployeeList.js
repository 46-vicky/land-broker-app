import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchCollection } from '../../hooks/useFetchCollection'
import { FiTrash2 } from "react-icons/fi";

const EmployeeList = () => {
  const {deleteDataById} = useFetchCollection()
  const deleteEmployee = (id)=>{
    deleteDataById("employees",id,responsFun)
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
    return (<tr key={index}><td>{index+1}. {employee.employeeName}</td><td>{employee.employeeMail}</td><td>{assignedPlan}</td><td aria-colspan={2} className="del-btn"><button className='delete-btn' aria-label='delete-btn' onClick={()=>deleteEmployee(employee.id)}><FiTrash2 /></button></td></tr>)
  })
  
  return (
    <div className='table-part'>
      <p></p>
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
    </div>
  )
}

export default EmployeeList
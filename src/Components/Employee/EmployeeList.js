import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchCollection } from '../../hooks/useFetchCollection'

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
    return (<tr key={index} className='employee-list' aria-colspan={12}><td className='plan-name' aria-colspan={4}>{index+1}. {employee.employeeName}</td><td className='commision-val' aria-colspan={4}>{employee.employeeMail}</td><td className='commision-val' aria-colspan={4}>{assignedPlan}</td><td aria-colspan={2} className="del-btn"><button className='delete-btn' aria-label='delete-btn' onClick={()=>deleteEmployee(employee.id)}></button></td></tr>)
  })
  
  return (
    <div>
      <table className='list-cont employees-cont' aria-colspan={14}>
        <tbody>
        <tr className='list-head' aria-colspan={12}>
          <th className='list-' aria-colspan={4}>Employee Name</th>
          <th className='plan-value-head' aria-colspan={4}>Employee Mail</th>
          <th className='plan-value-head' aria-colspan={4}>Assigned Plan</th>
        </tr>
        {plansList}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList
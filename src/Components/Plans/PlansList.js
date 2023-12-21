import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchCollection } from '../../hooks/useFetchCollection'
import { FiTrash2 } from "react-icons/fi";

const PlansList = () => {

  const {deleteDataById} = useFetchCollection()
  const deletePlan = (id)=>{
    deleteDataById("plans",id,responsFun)
  }
  const responsFun = (result)=>{
    console.log(result)
  }
  const allPlans = useSelector(state => state.plans.allPlans)
  const plansList = allPlans.map((plan, index) => <tr key={index}><td>{index+1}. {plan.planName}</td><td>{(plan.commisionType.toLowerCase()) === "amount" ? "₹" : "%"}{plan.commisionValue}</td><td><button className='delete-btn' aria-label='delete-plan' onClick={()=>deletePlan(plan.id)}><FiTrash2 /></button></td></tr>)
  
  return (
    <div className='table-part'>
      <table className='list-cont'>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Commision value</th>
          </tr>
        </thead>
        <tbody>
        {plansList}
        </tbody>
      </table>
    </div>
  )
}

export default PlansList

import React from 'react'
import { useSelector } from 'react-redux'
<<<<<<< HEAD
import { useFetchCollection } from '../../hooks/useFetchCollection'

const PlansList = () => {

  const {deletePlanById} = useFetchCollection()
  const deletePlan = (id)=>{
    deletePlanById("plans",id,responsFun)
  }
  const responsFun = (result)=>{
    console.log(result)
  }
  const allPlans = useSelector(state => state.plans.allPlans)
  const plansList = allPlans.map((plan, index) => <li key={index} className='plan-list'><p className='plan-name'>{index+1}. {plan.planName}</p><p className='commision-val'>{(plan.commisionType.toLowerCase()) === "amount" ? "₹" : "%"}{plan.commisionValue}</p><button className='delete-plan' aria-label='delete-plan' onClick={()=>deletePlan(plan.id)}></button></li>)
  
  return (
    <div>
      <ul className='plans-cont'>
        <li className='plan-list-head'>
          <p className='plan-name-head'>Plan Name</p>
          <p className='plan-value-head'>Commision value</p>
        </li>
        {plansList}
=======

const PlansList = () => {

  const allPlans = useSelector(state => state.plans.allPlans)

  return (
    <div>
      <ul>
        {allPlans.map((plan, index) => <li key={index}> {plan.planName} </li>)}
>>>>>>> 046b3ffae3acd4320d1106f4b6f884c727db143a
      </ul>
    </div>
  )
}

export default PlansList

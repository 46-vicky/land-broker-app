import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchCollection } from '../../hooks/useFetchCollection'

const PlansList = () => {

  const {deleteDataById} = useFetchCollection()
  const deletePlan = (id)=>{
    deleteDataById("plans",id,responsFun)
  }
  const responsFun = (result)=>{
    console.log(result)
  }
  const allPlans = useSelector(state => state.plans.allPlans)
  const plansList = allPlans.map((plan, index) => <tr key={index} className='list-data plan-list' aria-colspan={8}><td className='plan-name' aria-colspan={4}>{index+1}. {plan.planName}</td><td className='list-data commision-val' aria-colspan={3}>{(plan.commisionType.toLowerCase()) === "amount" ? "₹" : "%"}{plan.commisionValue}</td><td aria-colspan={1} className="del-btn"><button className='delete-btn' aria-label='delete-plan' onClick={()=>deletePlan(plan.id)}></button></td></tr>)
  
  return (
    <div>
      <table className='list-cont plans-cont' aria-colspan={8}>
        <thead>
          <tr className='list-head' aria-colspan={8}>
            <th className='list-data' aria-colspan={3}>Plan Name</th>
            <th className='list-data' aria-colspan={3}>Commision value</th>
            <th className='list-data' aria-colspan={2}>Delete</th>
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

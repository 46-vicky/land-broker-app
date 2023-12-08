import React from 'react'
import { useSelector } from 'react-redux'

const PlansList = () => {

  const allPlans = useSelector(state => state.plans.allPlans)

  return (
    <div>
      <ul>
        {allPlans.map((plan, index) => <li key={index}> {plan.planName} </li>)}
      </ul>
    </div>
  )
}

export default PlansList
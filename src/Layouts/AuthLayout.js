import React from 'react'
import { useFetchCollection } from '../hooks/useFetchCollection'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { planActions } from '../stores/planSlice';


const AuthLayout = (props) => {
    
    const { fetchPlanList } = useFetchCollection();
    const dispatch = useDispatch();
    const planFetch =  useSelector((state)=>state.plans.isFetchDone)

useEffect(()=>{
    if(!planFetch) {
        fetchPlans();
    }
},[])

const fetchPlans = ()=>{

    fetchPlanList('plans', listPlan)
}
   const listPlan = (responseObj)=>{
    
    const resultData = [];
   
    for (const planKey in responseObj) {
        resultData.push({
            id: responseObj[planKey].id,
            planName: responseObj[planKey].planName, 
            commisionType: responseObj[planKey].commisionType, 
            commisionValue: responseObj[planKey].commisionValue 
        });
    }
    dispatch(planActions.setAllPlans({plans: resultData}));
    dispatch(planActions.setFetchDone());
   }
  return (
    <div className='sec-partent-box'>
        {props.children}
    </div>
  )
}

export default AuthLayout

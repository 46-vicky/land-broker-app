import React from 'react'
import { useFetchCollection } from '../hooks/useFetchCollection'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import planReducer from "../stores/planSlice";

const AuthLayout = () => {
    
    const { makeRequest } = useFetchCollection();
    const dispatch = useDispatch();
    const planFetch =  useSelector((state)=>state.plans.isFetchDone)

useEffect(()=>{
    if(!planFetch) {
        fetchPlans();
    }
},[])

const fetchPlans = ()=>{

    makeRequest('plans', listPlan)
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
    console.log(resultData)
    dispatch(planReducer.setAllPlans({plans: resultData}));
    dispatch(planReducer.setFetchDone());
   }
  return (
    <div className='sec-partent-box'></div>
  )
}

export default AuthLayout
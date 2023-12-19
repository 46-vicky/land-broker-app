import React from 'react'
import { useFetchCollection } from '../hooks/useFetchCollection'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { planActions } from '../stores/planSlice';
import { employeeActions } from '../stores/employeeSlice';
import { flatAction } from '../stores/flatSlice';


const AuthLayout = (props) => {
    
    const { fetchData } = useFetchCollection();
    const dispatch = useDispatch();
    const planFetch =  useSelector((state)=>state.plans.isFetchDone)
    const employeeFetch = useSelector((state)=>state.employees.isFetchDone)
    const flatFetch = useSelector((state)=>state.flats.isFetchDone)

useEffect(()=>{
    if(!planFetch) {
        fetchPlans();
    }
    if(!employeeFetch){
        fetchEmployees()
    }
    if(!flatFetch){
        fetchFlats()
    }
},[])

const fetchPlans = ()=>{
    fetchData('plans', listPlan)
}

const fetchEmployees = ()=>{
    fetchData('employees',listEmployee)
}

const fetchFlats = ()=>{
    fetchData('flats',listFlat)
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

   const listEmployee = (responseObj)=>{
    const resultData = [];
   
    for (const employeeKey in responseObj) {
        resultData.push({
            id: responseObj[employeeKey].id,
            employeeName: responseObj[employeeKey].employeeName, 
            employeeMail: responseObj[employeeKey].employeeMail, 
            assignedPlanId: responseObj[employeeKey].assignedPlanId 
        });
    }
    dispatch(employeeActions.setAllEmployees({employees: resultData}));
    dispatch(employeeActions.setFetchDone());
   }

   const listFlat = (responseObj)=>{
        const resultData = [];
        for(const flatKey in responseObj){
            resultData.push({
                id: responseObj[flatKey].id,
                ownerName: responseObj[flatKey].ownerName,
                flatType: responseObj[flatKey].flatType,
                area: responseObj[flatKey].area,
                amount: responseObj[flatKey].amount,
                discount: responseObj[flatKey].discount,
                imageUrl: responseObj[flatKey].imageUrl,
                features: responseObj[flatKey].features,

        });  
        }
        dispatch(flatAction.setAllFlats({flats:resultData}));
        dispatch(flatAction.setFetchDone());
   }
  return (
    <div className='sec-partent-box'>
        {props.children}
    </div>
  )
}

export default AuthLayout

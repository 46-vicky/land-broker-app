import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useFetchCollection } from '../../hooks/useFetchCollection'
import { FiTrash2 } from "react-icons/fi";
import { IoList } from "react-icons/io5";
import ConformationPopup from './ConformationPopup';

const PlansList = () => {

  const {deleteDataById} = useFetchCollection()
  const [openConformationPopup,setOpenConformationPopup] = useState(false);
  const [deletedId,setDeletedId] = useState("")

  const deletePlan = (id)=>{
    setDeletedId(id);
    setOpenConformationPopup(true);
   // deleteDataById("plans",id,responsFun)
  }

  const allPlans = useSelector(state => state.plans.allPlans)
  const plansList = allPlans.map((plan, index) => <tr key={index}><td>{index+1}. {plan.planName}</td><td>{(plan.commisionType.toLowerCase()) === "amount" ? "₹" : "%"}{plan.commisionValue}</td><td><button className='delete-btn' aria-label='delete-plan' onClick={()=>deletePlan(plan.id)}><FiTrash2 /></button></td></tr>)
  
  return (
    <div className='table-part'>
        {openConformationPopup &&(
              <ConformationPopup 
              setOpenConformationPopup = {openConformationPopup}
              deletableId = {deletedId}
              />
        )}
      {allPlans.length ? (
      <>
        <h2 className='list-head'><span><IoList /></span>Plans List</h2><table className='list-cont'>
            <thead>
              <tr>
                <th>Plan Name</th>
                <th>Commision value</th>
                <th aria-label="head"></th>
              </tr>
            </thead>
            <tbody>
              {plansList}
            </tbody>
          </table>
        </>) : (<h2 className='list-head'>No Result</h2>)}
    </div>
  )
}

export default PlansList

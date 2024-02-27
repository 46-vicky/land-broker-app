import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useFetchCollection } from '../../hooks/useFetchCollection'
import { FiTrash2 } from "react-icons/fi";
import { IoList } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import EditPlan from './EditPlan';


const PlansList = () => {

  const {deleteDataById} = useFetchCollection()
  const [openEditPlanPopup,setOpenEditPlanPopup] = useState(false)
  const [editablePlanId,setEditablePlanId] = useState(null)

  const deletePlan = (id)=>{
    deleteDataById("plans",id)
  }
  const editPlan = (id)=>{
    setOpenEditPlanPopup(true);
    setEditablePlanId(id)
  }
  const allPlans = useSelector(state => state.plans.allPlans)
  const plansList = allPlans.map((plan, index) => <tr key={index}><td>{index+1}. {plan.planName}</td><td>{(plan.commisionType.toLowerCase()) === "amount" ? "₹" : "%"}{plan.commisionValue}</td><td className="edt-btn"><button className='edit-btn' aria-label="edit-button" onClick={()=>{editPlan(plan.id)}}><FiEdit /></button></td><td><button className='delete-btn' aria-label='delete-plan' onClick={()=>deletePlan(plan.id)}><FiTrash2 /></button></td></tr>)
  
  return (
    <div className='table-part'>
      {(openEditPlanPopup && editablePlanId !== null)&&(
          <EditPlan 
          editablePlanId = {editablePlanId}
          setOpenEditPlanPopup = {setOpenEditPlanPopup}
          />
      )
      }
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

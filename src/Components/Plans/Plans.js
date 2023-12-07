import React, { useState } from 'react'
import AddPlan from './AddPlan';
import PlansList from './PlansList';
import AuthLayout from '../../Layouts/AuthLayout';

const Plans = () => {
  const [openPopup,setOpenPoup] = useState(false);

  return (
    <AuthLayout>
      <div className="plans-cont">
          <button
            type='button'
            onClick={()=>setOpenPoup(true)}
            className='add-plan-btn'
          >
              AddPlan
          </button>     
    <div>
        {openPopup &&(
              <AddPlan setOpenPoup = {setOpenPoup}/>
        )}
      </div>
        <PlansList />
    </div>
   </AuthLayout>
  )
}

export default Plans
import React, { useState } from 'react'
import AddEmployee from './AddEmployee';
import EmployeeList from './EmployeeList';
import AuthLayout from '../../Layouts/AuthLayout';

const Employee = () => {
  const [openPopup,setOpenPoup] = useState(false);

  return (
    <AuthLayout>
      <div className="plans-cont">
          <button
            type='button'
            onClick={()=>setOpenPoup(true)}
            className='add-plan-btn'
          >
              AddEmployee
          </button>     
    <div>
        {openPopup &&(
              <AddEmployee setOpenPoup = {setOpenPoup}/>
        )}
      </div>
        <EmployeeList />
    </div>
   </AuthLayout>
  )
}

export default Employee
import React, { useState } from 'react'
import AddEmployee from './AddEmployee';
import EmployeeList from './EmployeeList';
import AuthLayout from '../../Layouts/AuthLayout';

const Employee = () => {
  const [openPopup,setOpenPoup] = useState(false);

  return (
    <AuthLayout>
      <div className="list-cont">
          <button
            type='button'
            onClick={()=>setOpenPoup(true)}
            className='add-plan-btn'
          >
              Add Employee
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
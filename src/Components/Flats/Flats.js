import React, { useState } from 'react'
import AuthLayout from '../../Layouts/AuthLayout';
import AddFlats from './AddFlats';
import FlatsList from './FlatsList';

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
              Add Flat
          </button>     
    <div>
        {openPopup &&(
              <AddFlats setOpenPoup = {setOpenPoup}/>
        )}
      </div>
        <FlatsList />
    </div>
   </AuthLayout>
  )
}

export default Employee
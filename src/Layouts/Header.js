import Nav from './Nav'
import Menubar from './Menubar'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loggedUserDetail } from '../stores/authSlice'
import { useNavigate } from 'react-router'
import { FaRegUser } from "react-icons/fa";


const Header = () => {
  const isLoginDetail = useSelector(loggedUserDetail)
  const isLogin = isLoginDetail.isLoggedIn;
  const navigate = useNavigate()
  useEffect(()=>{
    if(!isLogin){
      navigate("/login")  
    }
  })

  return (
    <div className='lm-head'>
        <h1>Land Masters</h1>
        {isLogin ? <p className='u-name'><span><FaRegUser /></span>{isLoginDetail.userName}</p>: ""}
        <div className='action-box'>
          <Menubar/>
          <Nav 
            isLogin = {isLogin}
          />
        </div>
        
    </div>
  )
}

export default Header
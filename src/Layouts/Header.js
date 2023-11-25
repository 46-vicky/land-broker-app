import Nav from './Nav'
import Menubar from './Menubar'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loggedUserDetail } from '../stores/authSlice'


const Header = () => {
  const isLoginDetail = useSelector(loggedUserDetail)
  const isLogin = isLoginDetail.isLoggedIn;

  return (
    <div className='lm-head'>
        <h1>Land Masters</h1>
        {isLogin ? <p className='u-name'>{isLoginDetail.userName}</p>: ""}
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
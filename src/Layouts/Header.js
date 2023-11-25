import Nav from './Nav'
import Menubar from './Menubar'
import React, { useEffect, useState } from 'react'


const Header = () => {
  const [isLogin,setIsLogin] = useState(false);
  useEffect(()=>{
    setIsLogin(JSON.parse(localStorage.getItem("login-status")))
    console.log(isLogin)
  },[])
  return (
    <div className='lm-head'>
        <Menubar/>
        <h1>Land Masters</h1>
        <Nav 
          isLogin = {isLogin}
          setIsLogin = {setIsLogin}
        />
    </div>
  )
}

export default Header
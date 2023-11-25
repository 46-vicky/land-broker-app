import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';


const Layout = () => {
  return (
    <div className='main-cont'>
        <Header/>
        <main className='outlet-part'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout
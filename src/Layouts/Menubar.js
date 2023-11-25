import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menubar = () => {
    const [menuOpen,setMenuOpen] = useState(false)
const toggleMenu = ()=>{
        setMenuOpen(!menuOpen)
}

  return (
  <div className={menuOpen ? 'menu-bar open': 'menu-bar'} onClick={()=>toggleMenu()}>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="plan">Plans</Link></li>
        <li><Link to="employee">Employee</Link></li>
        <li><Link to="flats">Flats</Link></li>
        <li><Link to="orders">Orders</Link></li>
    </ul>
  </div>
  )
}

export default Menubar
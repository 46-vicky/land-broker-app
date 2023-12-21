import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { PiNotepadBold } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Menubar = () => {
    const [menuOpen,setMenuOpen] = useState(false)
    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen)
    }

   const currentPage = useParams()
    
    console.log(currentPage[0]);
  return (
  <div className={menuOpen ? 'menu-bar open': 'menu-bar'} onClick={()=>toggleMenu()}>
    <ul>
        <li className={currentPage == "" ? "active" : ""}><Link to="/"><span><IoHome /></span>Home</Link></li>
        <li className={currentPage == "plan" ? "active" : ""}><Link to="plan"><span><PiNotepadBold /></span>Plans</Link></li>
        <li className={currentPage == "employee" ? "active" : ""}><Link to="employee"><span><FaUserTie /></span>Employee</Link></li>
        <li className={currentPage == "flats" ? "active" : ""}><Link to="flats"><span><FaBuilding /></span>Flats</Link></li>
        <li className={currentPage == "orders" ? "active" : ""}><Link to="orders"><span><FaShoppingCart /></span>Orders</Link></li>
    </ul>
  </div>
  )
}

export default Menubar
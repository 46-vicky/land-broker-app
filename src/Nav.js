import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul>
            <li><Link to="login">Login</Link></li>
        </ul>
    </div>
  )
}

export default Nav
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from '../Navbar/Nabar.module.css'


const Navbar = () => {

  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <header>
      <div className={classes.logoContainer}>
        <Link to='/' className={classes.logo}>
           COCKTAILS
        </Link>
      </div>
      <div>
       <ul>
         <li><NavLink to='/' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink></li>
         <li><NavLink to='about'style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>About</NavLink></li>
       </ul>

      </div>
    </header>
  )
}

export default Navbar
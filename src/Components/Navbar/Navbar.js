import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import classes from '../Navbar/Nabar.module.css'
import SearchForm from '../../Components/SearhForm/SearchForm'


const Navbar = () => {

  const location = useLocation();
 
  let activeStyle = {
    textDecoration: "underline",
  };

  if(location.pathname === '/' || location.pathname === '/about'){
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
        <SearchForm/>
      </header>
    ) 
  } else {
    return(
      <header>
        <h1 className={classes.logo}>COCKTAILS</h1>
      </header>
    )
  }

}

export default Navbar
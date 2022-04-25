import React, {useState, useEffect} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import classes from '../Navbar/Nabar.module.css'
import SearchForm from '../../Components/SearhForm/SearchForm'
import { FaHome } from'react-icons/fa'
import { HiInformationCircle} from 'react-icons/hi'


const Navbar = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 600px)").matches
  )

  const location = useLocation();
 
  let activeStyle = {
    textDecoration: "underline",
    textDecorationColor:'#8d0203',
    color:'#8d0203',
  };


  useEffect(() => {
    window
    .matchMedia("(max-width: 600px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  if(location.pathname === '/' || location.pathname === '/about'){
    return (
      <header>
        {!matches && 
           <div className={classes.logoContainer}>
               <Link to='/' className={classes.logo}>
                      COCKTAILS
               </Link>
           </div>
        
        }

        <div>
         <ul>
           <li><NavLink to='/' style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>{!matches && "Home" }{matches && <FaHome/> } </NavLink></li>
           <li><NavLink to='about'style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>{!matches && 'About'} {matches &&  <HiInformationCircle/>}</NavLink></li>
         </ul>
  
        </div>
        <SearchForm/>
      </header>
    ) 
  } else {
    return(
      <header>
         <div className={classes.logoContainer}>
          <Link to='/' className={classes.logo}>
             COCKTAILS
          </Link>
        </div>
      </header>
    )
  }

}

export default Navbar
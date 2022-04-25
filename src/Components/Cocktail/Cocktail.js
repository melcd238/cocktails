import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Cocktail.module.css'
import { FaGlassMartini, FaWineBottle }  from 'react-icons/fa';

const Cocktail = ({id,name, category, info, image}) => {
  
  return (
    
      <div className={classes.cardCocktail}>
        
         <div className={classes.cardImageContainer}>
         <img src={image} alt={name}></img>
       </div>

        <h2>{name}</h2>
        <div className={classes.cardContent}>
          <p style={{display:'flex'}}><FaGlassMartini style={{color:'#8d0203', marginRight:'8px'}}/> {category}</p>
          <p style={{display:'flex'}}><FaWineBottle style={{color:'#8d0203', marginRight:'8px'}}/> {info}</p>
         </div>

         <div className={classes.btnContainer}>
         <Link to={`singleCocktail/${id}`}>
         <button className={classes.btnMore}>More details</button>
         </Link>
         </div>
         
    </div>
    

  )
}

export default Cocktail
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Cocktail.module.css'

const Cocktail = ({id,name, category, info, glass, instruction, image, ingredients, measures}) => {
  
  return (
    
      <div className={classes.cardCocktail}>
        <Link to='/'>
         <div className={classes.cardImageContainer}>
         <img src={image} alt={name}></img>
       </div>
        <h2>{name}</h2>
        </Link>
    </div>
    

  )
}

export default Cocktail
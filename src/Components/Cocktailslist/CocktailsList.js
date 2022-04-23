import React from 'react'
import Cocktail from '../Cocktail/Cocktail'
import Loading from '../Loading/Loading'
import { useGlobalContext } from '../../Context'
import classes from './CocktailsList.module.css'

const CocktailList = () => {
  const { loading ,cocktailList } = useGlobalContext();
  console.log(cocktailList)

  if (loading){
    return(
      <section className={classes.cocktailsListContainer}>
        <Loading/>
      </section>
    )
  } 
   if( cocktailList.length < 1){
    return (
      <section className={classes.cocktailsListContainer}>
      <p> <span>Oups...</span> No cocktail matched with your search </p>
      </section>
    )
  } 
  if(cocktailList.length >= 1){
    return(
      <section className={classes.cocktailsListContainer}>
      <p style={{color:"white"}}> Cocktails list </p>
      </section>
    )

   
  }

}

export default CocktailList
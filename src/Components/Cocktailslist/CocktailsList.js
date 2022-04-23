import React from 'react'
import Cocktail from '../Cocktail'
import Loading from '../Loading'
import { useGlobalContext } from '../../Context'
import classes from './CocktailsList.module.css'

const CocktailList = () => {
  return (
    <section className={classes.cocktailsListContainer}>
      <h2>cocktail list component</h2>
    </section>
  )
}

export default CocktailList
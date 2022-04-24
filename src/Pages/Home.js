import React from 'react'
import CocktailsList from '../Components/Cocktailslist/CocktailsList'




const Home = () => {
  return (
    <main>
      <div className='titleContainer'>
          <h1> Find your favorite cocktail</h1>
          <div className='borderTitle'></div>
      </div>
       <CocktailsList/>
    </main>
  )
}

export default Home
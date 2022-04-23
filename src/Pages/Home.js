import React from 'react'
import CocktailsList from '../Components/Cocktailslist/CocktailsList'
import SearchForm from '../Components/SearhForm/SearchForm'

const Home = () => {
  return (
    <main>
      <section className='sectionSearch'>
         <SearchForm/>
      </section>
      <CocktailsList/>
    </main>
  )
}

export default Home
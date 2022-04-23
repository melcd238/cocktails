import React from 'react'
import { useGlobalContext } from '../../Context'
import classes from '../SearhForm/SearchForm.module.css'


const SearchForm = () => {
  const searchValue = React.useRef('');

  const handleSubmit = (e)=>{
    e.preventdefault();
  }

  return (
    <div className={classes.searchFormContainer}>
      <form onSubmit={handleSubmit}>
         <label htmlFor='name' >Find your favorite cocktail...</label>
         <input type="text" name='name' id='name' ref={searchValue} placeholder="search..."></input>
      </form>
     
    </div>
  )
}

export default SearchForm
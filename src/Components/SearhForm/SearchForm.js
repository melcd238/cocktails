import React from 'react'
import { useGlobalContext } from '../../Context'
import classes from '../SearhForm/SearchForm.module.css'


const SearchForm = () => {
  const { setInputsearch } = useGlobalContext();
  const searchValue = React.useRef('');

  const handleSubmit = (e)=>{
    e.preventdefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input type="text" name='name' id='name' ref={searchValue} placeholder="search..."></input>
      </form>
     
    </div>
  )
}

export default SearchForm
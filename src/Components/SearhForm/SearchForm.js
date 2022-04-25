import React from 'react'
import { useGlobalContext } from '../../Context'
import classes from './SearchForm.module.css'



const SearchForm = () => {
  const { setInputsearch } = useGlobalContext();
  const searchValue = React.useRef('');
  
  React.useEffect(()=>{
    searchValue.current.focus()
  }, [])

  const searchCocktail = ()=>{
    setInputsearch(searchValue.current.value)
  }
  const handleSubmit = (e)=>{
    e.preventdefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input className={classes.input} type="text" name='name' id='name' ref={searchValue} placeholder="search..."
          onChange={searchCocktail}></input>
      </form>
     
    </div>
  )
}

export default SearchForm
import React from 'react'
import Loading from '../Components/Loading/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import { FaGlassMartini }  from 'react-icons/fa';




const SingleCocktail = () => {
  const { id } = useParams()
  const { loading ,cocktail, setId } = useGlobalContext();
  console.log(cocktail)
  const searchId = ()=>{
     setId(id)
  }
   React.useEffect(()=>{
    searchId()
  },[id])
 
  if(loading){
    return(
      <main className='singleCocktailMain'>
      <Loading/>
      </main>
    )
  } 
  if (cocktail === null){
    return (<main className='singleCocktailMain'>
         <div className='errorContainer'>
             <h3>404</h3>
             <p>Oups....</p>
           <Link to='/'>
             <button className='btn-error'>Come back Home</button>
           </Link>
      </div>
    </main>)
  }
  const { name, image,category, glass,info,instruction,ingredients,measures  } = cocktail
  console.log(ingredients)
  return (
   
    <main className='singleCocktailMain'>
       <div className='singleCocktailContainer'>

          <div className='titleContainer'>
              <h1>{name} </h1>
              <div className='borderTitle'></div>
          </div>

          <div className='singleCardContainer'>
              <div className='singleCardImg'>
                   <img src={image} alt={name}></img>
              </div>

              <div className='singleCardContent'>
                  <p><FaGlassMartini/></p>
                  <p>Category: {category}</p>
                  <p>With or without alcohol: {info}</p>
                  <p>Kind of glass: {glass}</p>
                  <p><FaGlassMartini/></p>
              </div>
          </div>
          <div className='ingredientsMeasures'>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((item,index)=>{
                item = Object.values(item).toString()
                
              return (
                item ? <li style={{marginRight:"10px"}} key={index}> {item},</li> : null
              ) 
              })}
            </ul>
            <h3>Measures</h3>
            <ul>
              {measures.map((item,index)=>{
                     item = Object.values(item).toString()
                
                     return (
                       item ? <li style={{marginRight:"10px"}} key={index}> {item},</li> : null
                     ) 
               })}
              
            </ul>

          </div>

           <div className='instructions'>
              <h3>Instruction</h3>
              <p>{instruction}</p>
           </div>

      </div>
      
    </main>

  )
}

export default SingleCocktail
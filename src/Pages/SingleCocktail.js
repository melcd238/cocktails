import React from 'react'
import Loading from '../Components/Loading/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import { FaGlassMartini, FaWindowClose }  from 'react-icons/fa';




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
             <p>Oups....No cocktail matches</p>
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
         <Link to='/'>
              <FaWindowClose style={{color:'#8d0203', marginLeft:'95%', marginTop:'10px',fontSize:'2rem', cursor:'pointer'}}/>
         </Link>
          
          <div className='titleContainer'>
              <h1>{name} </h1>
              <div className='borderTitle'></div>
          </div>

          <div className='singleCardContainer'>
              <div className='singleCardImg'>
                   <img src={image} alt={name}></img>
              </div>

              <div className='singleCardContent'>
                  <FaGlassMartini/>
                  <p>Category: <span style={{fontSize:'1.2rem'}}>{category}</span></p>
                  <p>With or without alcohol: <span style={{fontSize:'1.2rem'}}>{info}</span></p>
                  <p>Kind of glass: <span style={{fontSize:'1.2rem'}}>{glass}</span></p>
                  <FaGlassMartini/>
              </div>
          </div>
          <div className='ingredientsMeasures'>
            <h3>Ingredients</h3>
            <ul style={{display:'flex', flexWrap:'wrap'}}>
              {ingredients.map((item,index)=>{
                item = Object.values(item).toString()
                
              return (
                item ? <li style={{marginRight:"10px"}} key={index}> {item},</li> : null
              ) 
              })}
            </ul>
            <h3>Measures</h3>
            <ul style={{display:'flex', flexWrap:'wrap'}}>
              {measures.map((item,index)=>{
                     item = Object.values(item).toString()
                
                     return (
                       item ? <li style={{marginRight:"10px"}} key={index}> {item},</li> : null
                     ) 
               })}
              
            </ul>

          </div>

           <div className='instructions'>
              <h3>Instructions</h3>
              <p>{instruction}</p>
           </div>

      </div>
      
    </main>

  )
}

export default SingleCocktail
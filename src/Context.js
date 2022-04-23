import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // State
  const [loading, setLoading] = useState(false);
  const [inputSearch, setInputsearch] = useState('a');
  const [cocktailList , setCocktailList] = useState([]);
  
  // Fetch data every time we put something in the input
  const FetchData = async()=>{
    setLoading(true)
    try {
      const response = await axios(`${url}${inputSearch}`)
      const data = await response.data
      const { drinks } = data;
      console.log(data)
      if(drinks){
        const newdrinks = drinks.map((item)=>{
          const {idDrink,strDrink ,strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb, strIngredient1,
                 strIngredient2,strIngredient3,strIngredient4, strIngredient5,strIngredient6 ,
                 strMeasure1, strMeasure2, strMeasure3,strMeasure4,strMeasure5,strMeasure6} = item;
          return {
            id:idDrink,
            name:strDrink,
            category: strCategory,
            info:strAlcoholic,
            glass:strGlass,
            instruction: strInstructions,
            image:strDrinkThumb,
            ingredients: [ 
                   {ingredient1: strIngredient1},
                   {strIngredient2: strIngredient2},
                   {ingredient3: strIngredient3},
                   {strIngredient4: strIngredient4},
                   {ingredient5: strIngredient5},
                  {strIngredient6: strIngredient6}
                    ],
            measures: [
              {measure1: strMeasure1},
              {measure2: strMeasure2},
              {measure3: strMeasure3},
              {measure4: strMeasure4},
              {measure5: strMeasure5},
              {measure6: strMeasure6}
            ] 
          }       
        })
        setCocktailList(newdrinks);
      }else{
        setCocktailList([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

useEffect(()=>{
   FetchData()
},[inputSearch])


  return <AppContext.Provider value={{loading, cocktailList, setInputsearch}}>
  {children}
  </AppContext.Provider>
}

// Custom Hook Context 
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
import React from 'react'

const About = () => {
  return (
    <main className='aboutMain'>
      <div className='cardAbout'>
         <h2 className='titleAbout'>About Cocktails</h2>
         <p className='pAbout'>
         This application was created with REACT and thanks to the API: <br/>
         <a href='https://www.thecocktaildb.com/api.php'>TheCocktailDB.com</a><br/>
         Thanks to the site <a href='https://www.pexels.com/fr-fr/'>Pexels</a>  for the background photo.
         You can find the source code on github: <a href='https://github.com/melcd238/cocktails'>Github cokctails</a>
         </p>
      </div>
      
    </main>
  )
}

export default About
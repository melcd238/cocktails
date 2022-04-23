import React from 'react'
import classes from './Loading.module.css'

const Loading = () => {
 return (
     
  <div className={classes.loader}>
      <p style={{color:"white", fontSize:"60px"}}>COCKTAILS</p>
      <div className={classes.loaderBar}></div>
  </div>
 )
}

export default Loading
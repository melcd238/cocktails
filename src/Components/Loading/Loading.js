import React from 'react'
import classes from './Loading.module.css'

const Loading = () => {
 return (
     
  <div className={classes.loader}>
      <p style={{color:"white", fontSize:"2rem"}}>LOADING</p>
      <div className={classes.loaderBar}></div>
  </div>
 )
}

export default Loading
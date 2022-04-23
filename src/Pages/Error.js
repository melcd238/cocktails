import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className='errorMain'>
      <div className='errorContainer'>
           <h3>404</h3>
           <p>Oups....</p>
           <Link to='/'>
             <button className='btn-error'>Come back Home</button>
           </Link>
      </div>
    </main>


  )
}

export default Error
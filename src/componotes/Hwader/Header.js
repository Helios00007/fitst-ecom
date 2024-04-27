import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
//link use akkiyapo error adich bcz cap Link ayrn small link alla note it
function Header() {
  return (
 <header className='header'>
   
   <Link to='/' style={{textDecoration:'none',color:'#fff'}}>
   
   <h1>
        SKIIEE STORE
    </h1>
   </Link>
   
   
   <Link to='/logout'>
   <button className='logout'>
        logout
    </button>

   
   </Link>
   

    
   
 </header>
  )
}

export default Header

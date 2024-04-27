import React, { useState,useEffect } from 'react'
import './Home.css'
import { getallproducts } from '../../Api service/Api'
import { Link } from 'react-router-dom'

function Home() {

   const [products, setProducts] = useState([])

useEffect(() => {
     const fetchproducts = async()=>{
      const data = await getallproducts();//ee datayilekk useeffect vech const data yill api store akki getallproducts 
     console.log(data,"data")
    setProducts(data)//ee data nea set ptoductill store akkan usestae
    
    }
     fetchproducts()
}, [])

  return (
    <div className='productgrid'>
      
{
  products.map((products)=>(
    <div className='product'  key={products.id}>
      
    <img src={products.image} alt='alternative'/>
    <h2>{products.title}</h2>
     <p>
  
      <span className='price'>
       ${products.price}
      </span>
     </p>

<Link to={`/product/${products.id} `}>
<button> product details</button>

</Link >

  
    </div>
  ))
}


 
    </div>
  )
}

export default Home

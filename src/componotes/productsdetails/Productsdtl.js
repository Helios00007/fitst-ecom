import React, { useEffect ,useState} from 'react'
import './Productsdtle.css'
import { getproductid } from '../../Api service/Api'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
function Productsdtl() {
const handelbuy=()=>{
    window.confirm("The product is out of stock")
}
const {id}=useParams();
const [first, setFirst] = useState({})

useEffect(() => {
  
const fetchproductsdetails = async()=>{
     const data= await getproductid(id)
     setFirst(data);
}
  fetchproductsdetails()
}, [id])//id indell use effect call akkiya mathi


  return (
    <div className='prdtcsdtlscntiner'>
        <img src={first.image} alt='image' className='prdctimg'  />
<div className='prodtinfo'>
    <h2 className='prdcttitile'>
{first.title}
    </h2>
    <p className='prdctdescrib'>
        {first.description}
    </p>
    <p className='prdctprice'>
        ${first.price}
    </p>
    <button className='addcart' onClick={handelbuy}>buy now</button>
    <Link to='/'>
    <button className='gobck'> go back to home</button>
    </Link>
    
    </div>      
    </div>
  )
}

export default Productsdtl

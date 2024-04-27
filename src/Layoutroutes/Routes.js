import React from 'react'
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import Header from '../componotes/Hwader/Header'
import Footer from '../componotes/footer/Footer'
import Home from '../componotes/home/Home'
import Logout from '../componotes/Logout/Logout'
import Productsdtl from '../componotes/productsdetails/Productsdtl'

//route use akkunath app js kurch code akkunath ann nallath so verea oru js fle indakitt header foot layout okkea SET AKKAM ATHIL
function RoutesLAY() {
  return (
 <>
 <Router>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/>

     <Route path='/fitst-ecom' element={<Home/>}/>
     <Route path='/logout' element={<Logout/>}/>
     <Route path='/product/:id' element={<Productsdtl/>}/>

    

    </Routes>
    <Footer/>
 </Router>
 
 
 
 </>
  )
}

export default RoutesLAY

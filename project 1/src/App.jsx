import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'


import {Routes, Route} from 'react-router-dom'

import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPop-up/LoginPopup'


const App = () => {

  const [showLogin,setShowLogin]= useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      
      
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
      
    </div>
    <Footer/>
    
    
    
    </>

   
  )
}

export default App

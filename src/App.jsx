import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'

function App() {

  return (
      <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/cart" element={ <Cart/>}/>
      </Routes>
      </div>
  )
}

export default App

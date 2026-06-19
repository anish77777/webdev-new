import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App

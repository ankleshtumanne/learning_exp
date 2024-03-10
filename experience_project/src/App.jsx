import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer  from './Components/Footer'
import AllRoutes from './Routes/AllRoutes'
function App() {
  

  return (
    <>
       <Header/>
      
       <AllRoutes/>
       <Footer />
       
    </>
  )
}

export default App

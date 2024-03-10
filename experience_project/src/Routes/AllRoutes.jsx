import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Header from '../Components/Header'

import Home from '../Components/Home'
const AllRoutes = () => {
  return (
    <>
      <Routes >

        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/Header" element="">Header</Route>
       
        <Route path="/Footer">Footer</Route>
      </Routes>
    </>
  )
}

export default AllRoutes
import React from 'react'
import {BrowserRouter, Routes , Route } from "react-router-dom"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

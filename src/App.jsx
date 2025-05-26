import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFounded from './pages/NotFounded'
import { Toaster } from './components/ui/toaster'


const App = () => {
  return (
    <>
    <Toaster/>
    <BrowserRouter>
    <Routes>  
      <Route  path='/' element={<Home/>} />
      <Route path='*' element={<NotFounded/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

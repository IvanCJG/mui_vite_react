import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Home from '../components/pages/Home';

function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Router
import React from 'react';
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Service from './Pages/Service';
import Project from './Pages/Project';
import Contact from './Pages/Contact';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Company from './Pages/Company';
import Concept from './Pages/Concept';
import Contact from './Pages/Contact';

import NotFound from './Pages/404';
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const [menuShowing, setMenuShowing] = useState(false)

  return (
    <div className='w-screen min-h-screen relative'>
      <Header menuShowing={menuShowing} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Concept" element={<Concept />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer menuShowing={menuShowing} setMenuShowing={setMenuShowing} />
    </div>
  );
}

export default App;

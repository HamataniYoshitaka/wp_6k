import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Concept from './Pages/Concept'
import Company from './Pages/Company'
import Contact from './Pages/Contact'
import Single from './Pages/Single'
import NotFound from './Pages/404'
import { setCategories } from "./redux/product";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { apiUrl } from './utils';


function App() {
  const categories = useSelector((state) => state.product.categories)
  const [menuShowing, setMenuShowing] = useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
    if (categories.length) return
    axios.get(apiUrl() +'/wp-json/wp/v2/categories').then(res => {
        dispatch(setCategories(res.data))
    })
}, [])

  return (
    <div className='w-screen min-h-screen relative'>
      <Header menuShowing={menuShowing} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:slug" element={<Single />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      <Footer menuShowing={menuShowing} setMenuShowing={setMenuShowing} />
    </div>
  );
}

export default App;

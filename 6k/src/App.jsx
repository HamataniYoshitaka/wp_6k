import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
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
import { useWindowSize } from './hooks/useWindowSize';


function App() {
  const [windowWidth, windowHeight] = useWindowSize()
  const categories = useSelector((state) => state.product.categories)
  const [menuShowing, setMenuShowing] = useState(false)
  const onSetMenuShowing = (show) => {
    setTimeout(()=>{
      setMenuShowing(show)
    }, 200)
  }
  const dispatch = useDispatch()
  useEffect(()=>{
    if (categories.length) return
      axios.get(apiUrl() +'/wp-json/wp/v2/categories').then(res => {
          dispatch(setCategories(res.data))
      })
  }, [])
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");
  useEffect(() => {
    if (location !== displayLocation) {
      setTransistionStage("fadeOut");
      setTimeout(() => {  
        setTransistionStage("fadeIn");
        setDisplayLocation(location);
      } , 500);
    }

  }, [location, displayLocation]);

  return (
    <div className='w-screen relative' style={{minHeight: windowHeight}}>
      <Header menuShowing={menuShowing} />
        <div 
          className={`transition-opacity ${transitionStage==='fadeOut'? 'opacity-0': 'opacity-100'} ${menuShowing? 'duration-100': 'duration-300'}`}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts/:slug" element={<Single />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      <Footer menuShowing={menuShowing} setMenuShowing={onSetMenuShowing} />
    </div>
  );
}

export default App;

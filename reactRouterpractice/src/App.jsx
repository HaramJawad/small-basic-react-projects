import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Components/navbar";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
function App() {

  return (
    <>
     <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes> 
    </>
  )
}

export default App

// import logo from './logo.svg';
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/Home.js';
import Certificates from './components/Certificate/certificates';
import './app.css'
// import { useState } from 'react';
import Bottom from './components/Footer/bottom';
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Card from './components/Card/card';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <div className='container-fluid' >

    <div    >
     <Navbar />
    </div>
    <Routes>
    <Route path="/" element={<Home/>}/>
         
    <Route path="/certificates" element={<Certificates/>}/>

    <Route path="/projects" element={<Home/>}/>
    <Route path="/resume" element={<Home/>}/>
    <Route path="/about" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
         
    </Routes>
    <Bottom/>
    </div>
  );
}

export default App;

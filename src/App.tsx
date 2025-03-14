import React, { useState } from 'react';
import MainContent from './components/Main';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Footer from './components/Footer';

import './App.css';
import ChatbotWidget from './components/Chatbot';



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme','dark');
  })
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
    
      <Router>
        <Routes>
          <Route path="/" element={<Hero/>}/>
        </Routes>
      </Router>

      {/* <ChatbotWidget/> */}
      {/* <MainContent/> */}
      {/* <Footer/>     */}
      {/* <BigProjectCardRack/> */}
    </div>
  )
}

export default App

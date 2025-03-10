import { useState } from 'react';
import MainContent from './components/Main';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Footer from './components/Footer';

import './App.css';
import ChatbotWidget from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <Navbar/>      
      <Hero/>
      <ChatbotWidget/>
      {/* <MainContent/> */}
      {/* <Footer/>     */}
    </div>
  )
}

export default App

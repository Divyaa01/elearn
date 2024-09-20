import React from 'react'
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/Home';
import Header from './components/header/header';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path = "/" element ={<Home/>} />

     
    </Routes>
    
    </BrowserRouter> 
    
    </>
  )
};

export default App
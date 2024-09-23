import React from 'react'
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/Home';
import Header from './components/header/header';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Verify from './components/pages/auth/Verify';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path = "/" element ={<Home/>} />
      <Route path = "/login" element ={<Login/>} />
      <Route path = "/register" element ={<Register/>} />
      <Route path = "/verify" element ={<Verify/>} />

    </Routes>
    
    </BrowserRouter> 

    
    
    </>
  )
};

export default App
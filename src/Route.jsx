import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '././component/home/Home';
import Signup from '././component/signup/Signup';
import Login from '././component/login/Login';
import Nav from './component/nav/Nav'
import Footer from './component/footer/Footer';
import Contact from './component/contact/Contact';
import About from './component/about/About';
import Header from './component/header/Header';

const Rout = () => {
  return (
    <div>
      
        <Router>
          <Header/>
          <Nav/>
            <Routes> 
              
                <Route path='/' element={<Home/>} />
                <Route path='signup' element={<Signup/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='contact' element={<Contact/>}/>
                
                <Route path='about' element={<About/>}/>
               
            </Routes>
        </Router>
        <Footer/>
    </div>
  )
}

export default Rout;
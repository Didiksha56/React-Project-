import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css' ;
import logoImg from '../assets/logo.png';
import taxiCar from '../assets/hero-img.png';
export default function Navbar(){
   return(
    <nav className="navbar pt-3">
        <a className="navbar-brand" href="#" >
          <img src={logoImg} alt="CabHUB logo" className="navbar-logo-img" />
        </a>
	    <input type="checkbox" id="menu-toggle" className="menu-checkbox" style={{display:'none'}} />
	    <label htmlFor="menu-toggle" className="toggle-btn">&#9776;</label>
	    <ul className="nav-list">
		  <li><a className="nav-link custom-link" href="#Home"> HOME </a></li> 
          <li><a className="nav-link custom-link" href="#About"> ABOUT </a></li> 
          <li><a className="nav-link custom-link" href="#Tariffs">FEATURES</a></li>
          <li><a className="nav-link custom-link" href="#Testimonial">BLOG</a></li>
          <li><a className="nav-link custom-link" href="#Download">BOOK A CAB</a></li>  
          <li><a className="nav-link custom-link" href="#Contact">CONTACTS</a></li>
        </ul>
    </nav>   
  );
}  
          
        
                
           
              
                
                
                  
              
              
                
                  
                
              
              
                
                  
                
              
            

     
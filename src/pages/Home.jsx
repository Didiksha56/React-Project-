import React from 'react';
import '../App.css' ;
import Navbar from '../components/Navbar.jsx' ;
import taxiCar from '../assets/hero-img.png' ;
export default function Home(){
  return(
   <header>
    <div className="hero-wrapper" >
	<Navbar />
	<div className="hero-content container text-center">
        <h3 className="hero-subtitle">BOOK CAB NOW</h3>
        <h1 className="hero-phone">+123 4567 8900</h1>
        <p className="hero-website">WWW.PSDFREEBIES.COM</p>
		<div className="taxi-container">
          <img src={taxiCar} alt="CabHUB Yellow Taxi" className="img-fluid hero-taxi-img" />
        </div>    
    </div>        
   </div>
  </header> 
 );
}
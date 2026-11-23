import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css' ;
import taxiCar from '../assets/hero-img.png';

export default function Tariffs() {
 return(
 <section className="py-5 tariff-section">
 <div className="container text-center">
  <div className="text-center mb-5">
   <h4 className="section-subtitle">OUR</h4>
   <h2 className="section-title">TARIFFS</h2>
  </div>
   <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
	
	<div className="col">
	<div className="card h-90 border-0 p-3 tariff-card">
    <img src={taxiCar} className="card-img-top mx-auto tariff-top-car" alt="Economy Class" />
    <div className="card-body">
    <h5 className="card-title fw-bold">ECONOMY CLASS</h5>
    <p className="card-text small">Quisque sollicitudin feugiat risus,eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
	<h3 className="fw-bold tariff-price-text my-3" >$1,5/MI</h3>
    <Link to="/" className="btn tariff-btn fw-bold px-4">READ MORE</Link>
    </div>
    </div>
    </div>
    <div className="col">
	<div className="card h-90 border-0 p-3 tariff-card">
    <img src={taxiCar} className="card-img-top mx-auto tariff-top-car" alt="Standard Class" />
    <div className="card-body">
    <h5 className="card-title fw-bold">STANDARD CLASS</h5>
    <p className="card-text small">Quisque sollicitudin feugiat risus,eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
	<h3 className="fw-bold tariff-price-text my-3" >$1,5/MI</h3>
    <Link to="/" className="btn tariff-btn fw-bold px-4">READ MORE</Link>
    </div>
    </div>
    </div>
    <div className="col">
	<div className="card h-90 border-0 bg-light p-3 tariff-card">
    <img src={taxiCar} className="card-img-top mx-auto tariff-top-car" alt="Business Class" />
    <div className="card-body">
    <h5 className="card-title fw-bold">BUSINESS CLASS</h5>
    <p className="card-text small">Quisque sollicitudin feugiat risus,eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
	<h3 className="fw-bold tariff-price-text my-3" >$1,5/MI</h3>
    <Link to="/" className="btn tariff-btn fw-bold px-4">READ MORE</Link>
    </div>
    </div>
    </div>
   </div>
 
 </div>
 </section>
 );
 }
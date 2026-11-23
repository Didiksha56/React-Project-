import React from 'react';
import {Link} from 'react-router-dom';
import { Play, Apple } from 'lucide-react';
import phoneImg from '../assets/phone.png';
import '../App.css' ;

export default function Download() {
  return(
  <section className="py-5 download-section">
      <div className="container text-center">
        <div className="text-center mb-5">
          <h4 className="section-subtitle">DOWNLOAD</h4>
          <h2 className="section-title">BEST CAB SERVICES</h2>
        </div>
	  
	  <div className="row align-items-center">
	      <div className="col-md-6 left-col">
            <img src={phoneImg} alt="CabHUB Mobile App" className="img-fluid phone-img" />
          </div>   
          <div className="col-md-6 right-col">
            <h4 className="download-heading">
              Download the Cab voucher app free! <br />
              Get Exciting New Offers
            </h4>
            <p className="download-desc">
              Quisque sollicitudin feugiat risus, eu posuere <br /> ex euismod eu.Phasellus hendrerit, massa <br /> efficitur. 
              
            </p>
            <div className="store-btn-group">
              <Link to="/" className="store-pill-btn">
               <Play size={22} fill="#00b4ff" color="#00b4ff" />
               <div className="store-text">
                 <small>GET IT ON</small>
                 <strong>Google Play</strong>
               </div>
             </Link>
             <Link to="/" className="store-pill-btn">
              <Apple size={24}  fill="currentColor" />
              <div className="store-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
             </Link>
            </div>
          </div>
        </div>  
      </div>      
</section>
);
}        
            


        

      
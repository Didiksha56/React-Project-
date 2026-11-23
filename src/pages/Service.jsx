import React from 'react';
import {Link} from 'react-router-dom';
import { Star, Hourglass, Castle, LocateFixed } from 'lucide-react';
import '../App.css' ;

export default function Service() {
  return(
  <section className="py-5 service-section">
      <div className="container text-center">
        <div className="text-center mb-5">
          <h4 className="service-subtitle">WE DO BEST</h4>
          <h2 className="service-title">THAN YOU WISH</h2>
        </div>
        <div className="row g-4 mt-2">
           <div className="col-md-6">
            <div className="service-box">
              <div className="service-icon-circle">
                <Star size={28} fill="#111111" strokeWidth={1.5} />
              </div>
              <div className="service-text">
                <h5>HOME PICKUP</h5>
                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu.
				   Phasellus hendrerit, massa efficitur dapibus pulvinar.</p> 
              </div>
            </div>
           </div> 
           <div className="col-md-6">
            <div className="service-box">
              <div className="service-icon-circle">
                <Hourglass size={28} strokeWidth={2.2} />
              </div>
              <div className="service-text">
                <h5>FAST BOOKING</h5>
                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. 
                   Phasellus hendrerit, massa efficitur dapibus pulvinar.</p>
              </div>
            </div>
           </div>  
           <div className="col-md-6">
            <div className="service-box">
              <div className="service-icon-circle">
                <Castle size={28} strokeWidth={2.2} />
              </div>
              <div className="service-text">
                <h5>BONUSES FOR RIDE</h5>
                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. 
                   Phasellus hendrerit, massa efficitur dapibus pulvinar.</p>
              </div>
            </div>
           </div>
           <div className="col-md-6">
            <div className="service-box">
              <div className="service-icon-circle">
                <LocateFixed size={28} strokeWidth={2.2} />
              </div>
              <div className="service-text">
                <h5>GPS SEARCHING</h5>
                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. 
                   Phasellus hendrerit, massa efficitur dapibus pulvinar.</p>
              </div>
            </div>
          </div>    
         </div>  
         <div className="text-center mt-5">
          <Link to="/" className="btn service-read-btn">READ MORE</Link>
         </div>   
       </div>
  </section>
  );
}          
                
              

         
            
                
              

          
          
                  
                
              

          
          
                  
              

        

       
            
          
        

      
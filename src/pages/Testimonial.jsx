import React from 'react';
import '../App.css';
import client1 from '../assets/client1.jpg'; 
import client2 from '../assets/client2.jpg'; 

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="container text-Center">
        <div className="text-center mb-5">
          <h4 className="service-subtitle">HAPPY CLIENT'S</h4>
          <h2 className="service-title">TESTIMONIALS</h2>
        </div>
        <div className="row g-4">
          
         
          <div className="col-md-6">
            <div className="testimonial-card">
              <p className="testimonial-text">
                Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. 
                Phasellus hendrerit,massa efficitur dapibus pulvinar,euismod
                aliquet nulla metus a mauris.
              </p>
              <div className="client-profile">
                <img src={client1} alt="John Doe" className="client-avatar" />
                <div>
                  <h5 className="client-name">JOHN DOE</h5>
                  <span className="client-role">BUSINESS MAN</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="testimonial-card">
              <p className="testimonial-text">
                Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. 
                Phasellus hendrerit,massa efficitur dapibus pulvinar,euismod
                aliquet nulla metus a mauris.
              </p>
              <div className="client-profile">
                <img src={client2} alt="Emily Carter" className="client-avatar" />
                <div>
                  <h5 className="client-name">EMILY CARTER</h5>
                  <span className="client-role">PRODUCT MANAGER</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
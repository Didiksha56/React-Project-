import React from 'react';
import {Link} from 'react-router-dom';
import { Share2, MessageCircle, Camera, Smartphone, Laptop, MapPin, Phone, Mail, Globe } from 'lucide-react'; 
import '../App.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-4">
		  <div className="p-5 footer-col">
            <h5 className="footer-heading">ABOUT CAB HUB</h5>
            <p className="footer-desc">
              Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. 
              Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien 
              eros sodales ante, euismod aliquet nulla metus a mauris.
            </p>
            <div className="footer-socials d-flex justify-content-center gap-3 mt-15">
              <Link to="/"><Share2 size={20} fill="#ffc61a" color="#ffc61a" /></Link>
              <Link to="/"><Globe size={20}  color="#ffc61a" /></Link>
              <Link to="/"><MessageCircle size={20} color="#ffc61a"  /></Link>
              <Link to="/"><Camera size={20}  color="#ffc61a" /></Link>
            </div>
          </div>
		  </div>
          <div className="col-md-4">
		  <div className="p-5 footer-col">
            <h5 className="footer-heading">DOWNLOAD</h5>
            <p className="footer-desc">
              Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. 
              Phasellus hendrerit, massa efficitur dapibus.
            </p>
            <div className="footer-platform">
              <p className="platform-link "><Smartphone size={18} className="me-2" />Android Users</p>
              <p className="platform-link"><Laptop size={18} className="me-2" />IOS Users</p>
            </div>
          </div>
          </div>
          <div className="col-md-4">
		  <div className="p-5 footer-col">
            <h5 className="footer-heading">CONTACT</h5>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-icon" />
                <span>+123, Main Street, Your City, New York, USA 789456</span>
              </li>
              <li>
                <Phone size={18} className="footer-icon" />
                <span>+123 4567 8900</span>
              </li>
              <li>
                <Mail size={18} className="footer-icon" />
                <span>free@psdfreebies.com</span>
              </li>
              <li>
                <Globe size={18} className="footer-icon" />
                <span>WWW.psdfreebies.com</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center">
        Copyright © 2026 CabHUB. All Rights Reserved.
      </div>
    </footer>
  );
}
         
          
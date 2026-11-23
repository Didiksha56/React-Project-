import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Tariffs from './pages/Tariffs.jsx';
import Service from './pages/Service.jsx';
import Download from './pages/Download.jsx';
import Testimonial from './pages/Testimonial.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App(){
   return (
    <BrowserRouter>
	<div>
	  <div id="Home"><Home /></div>
	  <div id="About"><About /></div>
	  <div id="Tariffs"><Tariffs /></div>
	  <Service />
	  <div id="Download"><Download /></div>
	  <div id="Testimonial"><Testimonial /></div>
	  <div id="Contact"><Contact /></div>
	 <Footer />
    </div>
	
    </BrowserRouter>
  );
}

export default App;

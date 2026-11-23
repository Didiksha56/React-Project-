import React from 'react';
import '../App.css' ;

export default function About(){
 return(
 <section className="about-section">
  <div className="about-container">
    <div className="about-left">
     <h4 className="about-subtitle">BEST IN CITY</h4>
	 <h2 className="about-title">TRUSTED CAB SERVICES IN NEW YORK</h2>
	 <p className="about-desc">
	  Quisque sollicitudin feugiat risus,eu posuere ex euismod eu. Phasellus 
	  hendrerit, massa efficitur. dapibus pulvinar, sapien eros sodales ante,
	  euismod aliquet nulla metus a mauris.Quisque sollicitudin feugiat risus, 
	  eu posuere ex euismod eu, Phaselleus hendrerit,massa efficitur dapibus 
	  pulvinar,sapien eros sodales ante, euismod aliquet nulla metus a 
	  mauris.
	 </p>
	 <button type="button" className="btn-dark-custom ">READ MORE</button>
    </div>
    <div className="about-right">
        <div className="booking-card">
		   <h1>BOOK A CAB</h1>
           <form action="Submit" className="booking-form">
			  
              <div className="form-row">
               <p><label htmlFor="name" className="form-label">NAME </label><input type="name" className="form-control" id="name" placeholder="Name"  required  /></p>
                <p><label htmlFor="phone" className="form-label">PHONE</label><input type="tel" className="form-control" id="phone" placeholder="Phone"  required  /> </p> 
              </div>    
              <div className="form-row">
                <p><label htmlFor="when" className="form-label">WHEN </label><input type="date" className="form-control" id="when" placeholder="When"  /> </p>
                <p><label htmlFor="time" className="form-label">TIME </label><input type="time" className="form-control" id="time" placeholder="Time"  /> </p>
              </div>    
              <div className="form-row">
                <p><label htmlFor="start" className="form-label">START </label><input type="text" className="form-control" id="start" placeholder="Start"  required /></p>
                <p><label htmlFor="end" className="form-label">END </label><input type="text" className="form-control" id="end" placeholder="End" required  />  </p>
              </div>    
              <div className="form-full">
			  <label htmlFor="vehicle" className="form-label">VEHICLE </label>
                <select id="vehicle" className="form-control" >
                 <option value="">Choose Vehicle</option>
                  <option value="economy">Economy Class</option>
                  <option value="standard">Standard Class</option>
                  <option value="business">Business Class</option>
                </select>
              </div>     
              <button type="submit" value="book"className="btn-submit-cab">
                BOOK
              </button>
           </form>     
        </div>
    </div>          
</div>
</section>
 );
}                   
 
 
 
 
 
 
                  
               
                
                  
                  
                  
                  
                  
                  
               
              

              
               
                
                  
                  
                  
                  
                  
               
              

               
                  
                  
                  
                  
                 
                
                  
                  
                  
                  
                  
                  
               
              

             
              
                  
                  
                
                  

              
              

          

      
 

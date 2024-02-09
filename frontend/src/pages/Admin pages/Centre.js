import React from 'react';
import './Centre.css';
import image from '../../images/year2.jpg';
import images from '../../images/year.jpg';
import Header from './Header';
import Navigation from './Navigation';
import SidePanel from './SidePanel';



const Centre = () => {
  return (
    <div> 
      <Header />
      <Navigation />
         <div className="container851">
      <div className="images861">
        <div>
          <img className="images141" src={images} alt="Image 1" /></div>
        <div>
          <img className="images141" src={image} alt="Image 2" /></div>
      </div>
      {/* <div className="text87">
        <div className="text-content88">
          <div>We cannot stop natural disasters but we can arm ourselves with knowledge: so many lives wouldn't have to be lost if there was enough disaster preparedness.</div>
          <p>The future depends on what we do in the present.</p>
        </div>
      </div> */}
    </div>
    <SidePanel />
    </div>

  );
};


export default Centre;

import React from 'react'
import Agencysidebar from "./AgencySideBar/agencysidebar";
import Agencybody from "./AgencyBody/agencybody";
import "./agencymain.css";
import Tracking from './AgencyTracking/tracking';
function Agencymain() {

  return (
    <div className="container01">
      
    
      <Agencysidebar />
      <Agencybody/>
        {/* <Tracking/>
       */}
    </div>
      );
    }
    
    export default Agencymain;
    
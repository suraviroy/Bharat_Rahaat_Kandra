import React from 'react'
;

import "./AgencyInventoryMain.css";
import AgencyInventoryBody from './AgencyInventoryBody';
import Agencysidebar from '../../AgencySideBar/agencysidebar';

function AgencyInventoryMain() {

  return (
    <div className="container01">
      
    
      <Agencysidebar />
      <AgencyInventoryBody/>
       
    </div>
      );
    }
    
    export default AgencyInventoryMain;
    
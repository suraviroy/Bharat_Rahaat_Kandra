import React from 'react'
;

import "./AgencyMessageMain.css";
import AgencyMessageBody from './AgencyMessageBody';
import Agencysidebar from '../AgencySideBar/agencysidebar';

function AgencyMessageMain() {

  return (
    <div className="container01">
      
    
      <Agencysidebar />
      <AgencyMessageBody/>
       
    </div>
      );
    }
    
    export default AgencyMessageMain;
    
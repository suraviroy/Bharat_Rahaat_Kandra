import React from 'react'
;

import "./AgencyRecordMain.css";
import AgencyRecordBody from './AgencyRecordBody';
import Agencysidebar from '../../../AgencySideBar/agencysidebar';

function AgencyRecordMain() {

  return (
    <div className="container01">
      
    
      <Agencysidebar />
      <AgencyRecordBody/>
       
    </div>
      );
    }
    
    export default AgencyRecordMain;
    
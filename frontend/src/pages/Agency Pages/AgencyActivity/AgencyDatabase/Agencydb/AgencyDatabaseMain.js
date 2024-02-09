import React from 'react'
;

import "./AgencyDatabaseMain.css";
import AgencyDatabaseBody from './AgencyDatabaseBody';
import Agencysidebar from '../../../AgencySideBar/agencysidebar';

function AgencyDatabaseMain() {

  return (
    <div className="container01">
      
    
      <Agencysidebar />
      <AgencyDatabaseBody/>
       
    </div>
      );
    }
    
    export default AgencyDatabaseMain;
    
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SidePanel.css';
import MapPage from './MapPage';
import { useHistory } from 'react-router-dom';
const SidePanel = () => {
  const history = useNavigate();

  const handleMapTabClick = () => {
   
    history('/admin'); 
  };

  const handleVerificationTabClick = () => {
    // Navigate to the VerificationsPage component when the "Verification Requests" tab is clicked
    history('/VerificationsPage'); // Define the route path for the Verifications page
  };
  const handleSendAlerts =() =>{
    history('/SearchMain');
  }
  const handleVerificationRequestTabClick =() =>{
    history('/AgencyDirectory');

  }
  const handleNotificationG =() =>{
    history('/NotificationG');
   
  }
  const handleStats =() =>{
    history('/Centre');
   
  }
  const handleAffect =() =>{
    history('/VictimsPage');
   
  }

  return (
    <aside className="side-panel78">
      {/* Map */}
      <div className="tab78"
       onClick={handleMapTabClick}
       >
        <h2>Map</h2>
      </div>

      {/* Verification Requests (Tab) */}
      <div className="tab78"  onClick={handleVerificationTabClick}>
        <h2>Verification Requests</h2>
      </div>

      {/* Agency Directory */}
      <div className="tab78"  onClick={handleVerificationRequestTabClick}>
        <h2>Agency Directory</h2>
      </div>

      {/* Notifications */}
      <div className="tab78" onClick={handleNotificationG}>
        <h2>Notifications</h2>
      </div>

      {/* Resources and Guidelines */}
      <div className="tab78" onClick={handleSendAlerts}>
        <h2>Send Alerts</h2>
      </div>

      {/* Reports and Statistics */}
      <div className="tab78" onClick={handleStats}>
        <h2>Reports and Statistics</h2>
      </div>

      {/* Incident Management */}
      <div className="tab78" onClick={handleAffect}>
        <h2>Affected People</h2>
      </div>

      {/* Inventory Management */}
      <div className="tab78">
        <h2>Inventory Management</h2>
      </div>

      {/* Grants and Funding */}
      <div className="tab78">
        <h2>Grants and Funding</h2>
      </div>
    </aside>
  );
};

export default SidePanel;
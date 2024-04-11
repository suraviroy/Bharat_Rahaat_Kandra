// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SidePanel.css';
// import MapPage from './MapPage';

// const SidePanel = () => {
//   const history = useNavigate();

//   const handleMapTabClick = () => {
   
//     history('/admin'); 
//   };

//   const handleVerificationTabClick = () => {
//     // Navigate to the VerificationsPage component when the "Verification Requests" tab is clicked
//     history('/VerificationsPage'); // Define the route path for the Verifications page
//   };
//   const handleSendAlerts =() =>{
//     history('/SearchMain');
//   }
//   const handleVerificationRequestTabClick =() =>{
//     history('/AgencyDirectory');

//   }
//   const handleNotificationG =() =>{
//     history('/NotificationG');
   
//   }
//   const handleStats =() =>{
//     history('/Centre');
   
//   }
//   const handleAffect =() =>{
//     history('/VictimsPage');
   
//   }
//   const handleMissing =() =>{
//     history('/missingpeopleList');
   
//   }

//   return (
//     <aside className="side-panel78">
//       {/* Map */}
//       <div className="tab78"
//        onClick={handleMapTabClick}
//        >
//         <h2>Map</h2>
//       </div>

//       {/* Verification Requests (Tab) */}
//       <div className="tab78"  onClick={handleVerificationTabClick}>
//         <h2>Verification Requests</h2>
//       </div>

//       {/* Agency Directory */}
//       <div className="tab78"  onClick={handleVerificationRequestTabClick}>
//         <h2>Agency Directory</h2>
//       </div>

//       {/* Notifications */}
//       <div className="tab78" onClick={handleNotificationG}>
//         <h2>Notifications</h2>
//       </div>

//       {/* Resources and Guidelines */}
//       <div className="tab78" onClick={handleSendAlerts}>
//         <h2>Send Alerts</h2>
//       </div>
//       <div className="tab78" onClick={handleAffect}>
//         <h2>Affected People</h2>
//       </div>
//       <div className="tab78" onClick={handleMissing}>
//         <h2>Missing People List</h2>
//       </div>
//       {/* Reports and Statistics */}
//       <div className="tab78" onClick={handleStats}>
//         <h2>Reports and Statistics</h2>
//       </div>

     
      

//       {/* Grants and Funding */}
//       <div className="tab78">
//         <h2>Grants and Funding</h2>
//       </div>
//     </aside>
//   );
// };

// export default SidePanel;



import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SidePanel.css';

const SidePanel = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get the current route

  // Define a function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  // Define the active tab style
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="side-panel78">
      {/* Map */}
      <div
        className={`tab78 ${isActive('/admin') ? 'active-tab' : ''}`} // Conditional active class
        onClick={() => handleNavigate('/admin')}
      >
        <h2>Map</h2>
      </div>

      {/* Verification Requests */}
      <div
        className={`tab78 ${isActive('/VerificationsPage') ? 'active-tab' : ''}`}
        onClick={() => handleNavigate('/VerificationsPage')}
      >
        <h2>Verification Requests</h2>
      </div>

      {/* Agency Directory */}
      <div
        className={`tab78 ${isActive('/AgencyDirectory') ? 'active-tab' : ''}`}
        onClick={() => handleNavigate('/AgencyDirectory')}
      >
        <h2>Agency Directory</h2>
      </div>

      {/* Notifications */}
      <div
        className={`tab78 ${isActive('/NotificationG') ? 'active-tab' : ''}`}
        onClick={() => handleNavigate('/NotificationG')}
      >
        <h2>Notifications</h2>
      </div>

      {/* Send Alerts */}
      <div
        className={`tab78 ${isActive('/SearchMain') ? 'active-tab' : ''}`}
        onClick={() => handleNavigate('/SearchMain')}
      >
        <h2>Send Alerts</h2>
      </div>

      {/* Affected People */}
      <div
        className={`tab78 ${isActive('/VictimsPage') ? 'active-tab' : ''}`}
        onClick={() => handleNavigate('/VictimsPage')}
      >
        <h2>Affected People</h2>
      </div>

      {/* Missing People List */}
      <div
        className={`tab78 ${isActive('/missingpeopleList') ? 'active-tab' : ''}`}
        onClick={() => handleNavigate('/missingpeopleList')}
      >
        <h2>Missing People List</h2>
      </div>

      {/* Reports and Statistics */}
      <div
        className={`tab78 ${isActive('/Centre') ? 'active-tab' : ''}`}
        onClick={() => handleNavigate('/Centre')}
      >
        <h2>Reports and Statistics</h2>
      </div>

      {/* Grants and Funding */}
      <div className="tab78">
        <h2>Grants and Funding</h2>
      </div>
    </aside>
  );
};

export default SidePanel;

// In your CSS file (SidePanel.css)


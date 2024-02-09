import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import SidePanel from './SidePanel';
import MapPage from './MapPage';
import VerificationsPage from './VerificationsPage'; // Import the VerificationsPage component
import './admin.css';


function Admin() {
    return (
    //     <Router>
    //   <div className="App75">
    //     <Header />
    //     <div className="main-content75">
    //       <Navigation />
    //       <Routes>
    //         <Route
    //           exact
    //           path="/MapPage"
    //           element={<MapPage />}
    //         />
    //         {/* Add a new route for the VerificationsPage component */}
    //         <Route
    //           exact
    //           path="/VerificationsPage"
    //           element={<VerificationsPage />}
    //         />
    //         {/* Define additional routes for other components */}
    //         {/* <Route path="/about">
    //           <AboutPage />
    //         </Route> */}
    //       </Routes>
    //     </div>
    //     <SidePanel />
    //   </div>
    // </Router>

       

<div className="App75">
  <Header />
  <div className="main-content75">
    <Navigation />
    <MapPage />
    <Routes>
      {/* <Route
        exact
        path="/MapPage"
        element={<MapPage />}
      /> */}
      {/* Add a new route for the VerificationsPage component */}
      {/* <Route
        exact
        path="/VerificationsPage"
        element={<VerificationsPage />}
      /> */}
      {/* Define additional routes for other components */}
      {/* <Route path="/about">
        <AboutPage />
      </Route> */}
    </Routes>
  </div>
  <SidePanel />
</div>
    
    );
}
export default Admin;


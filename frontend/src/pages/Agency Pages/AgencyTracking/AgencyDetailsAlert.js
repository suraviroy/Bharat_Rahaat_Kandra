
import React from "react";
import Popup from "reactjs-popup";
import './AgencyDetailAlert.css'

function AgencyDetailAlert({ isOpen, onClose,agencyname, contactNumber,email,address }) {
  // Replace these example details with actual agency details
  // const agencyDetails = {
  //   name: "TIASHA Agency",
  //   contactNumber: "123-456-7890",
  //   email: "tiasha21example@email.com",
  //   address: "123 Main Street, BEHALA, WEST BENGAL",
  // };

  return (
    <Popup className="trpop01" open={isOpen} onClose={onClose}>
      <div className="trdiv01">
        {/* <button className="close-button01" onClick={onClose}>X</button>  */}
        <h2 className="trh01">Alert Sender</h2>
        <p className="trdetails01">Name: {agencyname}</p>
        <p className="trdetails01">Contact Number: {contactNumber}</p>
        <p className="trdetails01">Email: {email}</p>
        <p className="trdetails01">Address: {address}</p>
        {/* <p className="trdetails01">Latitude: {pin}</p>
        <p className="trdetails01">Longitude: {state}</p> */}
      </div>
    </Popup>
  );
}

export default AgencyDetailAlert;

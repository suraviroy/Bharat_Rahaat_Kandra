
import React, { useState } from 'react';
import './AgencyMessage.css'; 
import { AiTwotoneAlert } from 'react-icons/ai'

function AgencyMessage() {
  const [showDetails, setShowDetails] = useState(false); // State to control whether to show details

  const notifications = [
    {
      id: 1,
      message: 'You have got a new message',
      actionText: 'View Map',
      agency: {
        name: 'Example Agency',
        address: '123 Example Street',
        contactNumber: '555-555-5555',
      },
    },
    
  ];

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div className="notification-row" key={notification.id}>
          <div className="notification-icon">
            <AiTwotoneAlert alt="Notification Icon" />
          </div>
          <div className="notification-content">
            <p className='notip67'>{notification.message}
              <button className="view-map-button">{notification.actionText}</button> 
              {notification.actionText === 'View Map' && (
                <button className="view-details-button" onClick={toggleDetails}>
                  {showDetails ? 'Hide Details' : 'More Details'}
                </button>
              )}
            </p>
            {showDetails && (
              <div className="agency-details">
                <p><strong>Agency Name:</strong> {notification.agency.name}</p>
                <p><strong>Address:</strong> {notification.agency.address}</p>
                <p><strong>Contact Number:</strong> {notification.agency.contactNumber}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AgencyMessage;

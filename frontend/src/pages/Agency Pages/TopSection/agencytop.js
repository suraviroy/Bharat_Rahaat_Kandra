import React, { useState } from 'react';
import './agencytop.css';
import { useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Agencytop = (props) => {
  const [sendAlertPopupVisible, setSendAlertPopupVisible] = useState(false);
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const [latalert, setLat] = useState('');
  const [lonalert, setLon] = useState('');
  const[typeofrequest, settypeofrequest]= useState('EmergencyAlert');
  const [data1, setData] = React.useState(localStorage.getItem('token'));


  const alertsender1 = props.value;
const alertsender= alertsender1 ? alertsender1.nagency : null;
const contactNumber = alertsender1 ? alertsender1.contactNumber : null;
const email = alertsender1 ? alertsender1.email : null;
const address = alertsender1 ? alertsender1.address : null;

  const Navigate = useNavigate();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((postion) => {
      setLat(postion.coords.latitude)
      setLon(postion.coords.longitude)
      console.log(latalert, lonalert)

    })
  }, [latalert, lonalert])


  const handleSendAlertClick = () => {
    setSendAlertPopupVisible(true);
  };

  const handleLogoutClick = () => {
    setLogoutPopupVisible(true);
  };

  const handleSendAlertConfirm = async (event) => {
    // Add logic to send the alert here
    console.log("alert" + alertsender);
    ////////////

    const { data } = await axios.post('http://localhost:8080/alertRouter/sendalert', {
      latalert: latalert,
      lonalert: lonalert,
      time: new Date().toISOString(),
      alertsender: alertsender,
      typeofrequest :typeofrequest,
      contactNumber : contactNumber,
      email : email,
      address : address,

    }, {
      // headers: {
      //   headers: { "Authorization": `Bearer ${data1  }` },
      // }
      headers: {
        'Content-Type': 'application/json',
        // "Authorization": `Bearer ${data1  }`,
      }
    }
    )

    // const data = await response.json();
    console.log(data);
    setSendAlertPopupVisible(false);
    toast("Alert send!")
  };

  const handleLogoutConfirm = () => {
    // Add logout logic here
    Navigate("/")
    setLogoutPopupVisible(false);
  };

  const handleCancel = () => {
    setSendAlertPopupVisible(false);
    setLogoutPopupVisible(false);
  };

  return (
    <div className='top26'>
      <a className="notification26" onClick={handleSendAlertClick}>
        {/* <span>Send Alert</span> */}
        <span>Send Alert</span>
      </a>{' '}
      <a href="#" className="notification34" onClick={handleLogoutClick}>
        <span>Logout</span>
      </a>
      <div className='maptitle26'>Map</div>

      {/* Send Alert Popup */}
      {sendAlertPopupVisible && (
        <div className="popup02">
          <div className="popup-content02">
            <p>Do you want to send an alert?</p>
            <button onClick={handleSendAlertConfirm}>Send</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}

      {/* Logout Popup */}
      {logoutPopupVisible && (
        <div className="popup02">
          <div className="popup-content02">
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogoutConfirm}>Logout</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Agencytop;

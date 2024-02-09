import React from 'react';
import { useState } from 'react';
import './notificationG.css';
import { AiTwotoneAlert } from 'react-icons/ai';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import addNotification from 'react-push-notification';
import Header from './Header';
import Navigation from './Navigation';
import SidePanel from './SidePanel';
import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button';

function NotificationG() {
  const Navigate = useNavigate();
  // const notifications = [
  //   {
  //     id: 1,
  //     message: 'Some Emergency is there',
  //     actionText: 'View Map',
  //   },
  //   // {
  //   //   id: 2,
  //   //   message: 'Hi Suravi! Tiasha sent you a new message',
  //   //   actionText: 'Open Details',
  //   // },
  // ];
  const [alert1, setalert1] = useState([]);
  const [alertnumber, setalertnumber] = useState(0);
  const [aler, setaler] = useState(0);

  //   React.useEffect(() => {
  //     async function handleData() {
  //   const options = {
  //     method: "GET",
  //     url: "http://localhost:8080/alertRouter/notification",
  //     // params: { token: data },
  //     // headers: { "Authorization": `Bearer ${data}` },
  //   };
  //   await axios

  //     .request(options)
  //     .then((response) => {
  //       console.log(response);
  //       //const data = response.json();
  //       // setUsers(response.data);
  //       setalert(response);
  //       if (response.length !== alertnumber) {
  //         setalertnumber(response.length)
  //         toast("Alert send!");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   }
  //   handleData();
  //  },[]);
   
  function toNotify(){
    addNotification ({
      title : "Bharat Rahat Kendra",
      message : "Alert",
      duration : 5000,
      icon : "https://res.cloudinary.com/dosofpk8l/image/upload/v1694109434/brk_logo-removebg-preview_iavumf.png",
      native : true
    });
  }

  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/alertRouter/notification', {
      method: 'GET',
    })
    const data = await response.json();
    setalert1(data.data);
    console.log(data.data.length);
    if (data.data.length !== alertnumber) {
      setaler(aler+1);
      console.log("aler"+aler);
      setalertnumber(data.data.length)
      //alert("new alert");
      // toast("Alert send!");
      if(aler >= 1){
        toNotify();
      }
      
    }
  }

  React.useEffect(() => {
    getUsers();
  })


  function gotoMap(){
    Navigate("/admin");
  }


  const extractAndFormatDateTime = (timestamp) => {
    const dateObject = new Date(timestamp);
    
    // Extracting date components
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; 
    const day = dateObject.getDate();
    
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    const formattedDateTime = `${month}/${day}/${year}  ${hours}:${minutes}:${seconds}`;

    return formattedDateTime;
  };


  return (
    <div>
        <div className='header5677'> <Header /></div>
      <div className='header56770'><Navigation /></div>
    <div className="notification-container180">
      {alert1.map((user) => (
        <div className="notification-row" >
          <div className="notification-icon">
            <AiTwotoneAlert alt="Notification Icon" />
          </div>

          <div className="notification-content">
            <p className='notip67'>
            {/* <p className='time781'>{user.time} </p> */}
            <p className='time781'>{extractAndFormatDateTime(user.time)}</p>
            <p>{user.alertsender} needs your help</p>
           
              {/* {notification.message} */}
              <div className='notify56'>
               
             <div className='viewMap167'> <p>view the map to get further details</p></div>
             <div><p className="blink">{user.typeofrequest} !</p></div>
             <div className='buo90'>
             <Popup trigger=
                    {
                      <button className="view-map-button" onClick={gotoMap}>
                        View Details
                      </button>
                    }
                    modal nested>
                    {
                      close => (
                        <div className='pop871' >

                          <div className='gov32' >
                            {user.alertsender}
                          </div>
                          <div>

                            <div > Type of Alert :{user.typeofrequest} </div>
                            <div > Contact Number :{user.contactNumber} </div>
                            <div >Email : {user.email} </div>
                            <div >Address :  {user.address} </div>
                            <div className='resourcse753' >
                             Resource Needed :
                              {user.selectedResourceTypes.map((resource, index) => (
                                <div key={index}>{resource} ,</div>
                              ))}
                            </div>
                            <div >Number of People :  {user.customResourceType} </div>
                          </div>

                          <Button className='xxx00' onClick=
                            {() => close()}>
                            close
                          </Button>
                        </div>
                      )
                    }
                  </Popup>

                </div>
              </div> </p>
          </div>
        </div>
      ))}
      {/* <ToastContainer
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
      /> */}
      </div>
    <SidePanel />
    </div>
  );
}

export default NotificationG;

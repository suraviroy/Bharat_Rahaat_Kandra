import React from 'react';
import { useState } from 'react';
import './AgencyMessage.css';
import { AiTwotoneAlert } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import addNotification from 'react-push-notification';
import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AgencyMessage() {
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
  const [foodAmount, setFoodAmount] = useState('');

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

  function toNotify() {
    addNotification({
      title: "Bharat Rahat Kendra",
      message: "Alert",
      duration: 5000,
      icon: "https://res.cloudinary.com/dosofpk8l/image/upload/v1694109434/brk_logo-removebg-preview_iavumf.png",
      native: true
    });
  }

  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/alertRouter/notification', {
      method: 'GET',
    })
    const data = await response.json();
    setalert1(data.data);
    if (data.data.length !== alertnumber) {
      setaler(aler + 1);
      setalertnumber(data.data.length)
      //alert("new alert");
      // toast("Alert send!");
      if (aler >= 1) {
        toNotify();
      }

    }
  }
  async function ClickFoodAmountChange(id, people, alertsender, email) {
    try {
      const response = await fetch(`http://localhost:8080/alertRouter/UpdatePeople/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customResourceType: people - foodAmount }) 
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message); 
      } else {
        console.error(data.message); 
      }
    } catch (error) {
      console.error("Error:", error);
    }
    finally{
      setFoodAmount('')
    }
    const name = window.localStorage.getItem("name");
    const phno = window.localStorage.getItem("phno");
    console.log(name, email, foodAmount,phno);

    const hiddenForm = document.createElement('form');
    hiddenForm.style.display = 'none';

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.name = 'email';
    emailInput.value = email;
    hiddenForm.appendChild(emailInput);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.value = name;
    hiddenForm.appendChild(nameInput);

    const foodAmountInput = document.createElement('input');
    foodAmountInput.type = 'text';
    foodAmountInput.name = 'foodAmount';
    foodAmountInput.value = foodAmount;
    hiddenForm.appendChild(foodAmountInput);

    const phnoInput = document.createElement('input');
    phnoInput.type = 'text';
    phnoInput.name = 'phno';
    phnoInput.value = phno;
    hiddenForm.appendChild(phnoInput);

    document.body.appendChild(hiddenForm);
    await emailjs.sendForm(
      "service_w9nxahv",
      "template_gixct9i",
      hiddenForm,
      "9CaZP6pOITX6wmz0k"

    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    document.body.removeChild(hiddenForm);
    toast("Food Request Accepted!")

  }

  const handleFoodAmountChange = (event) => {
    setFoodAmount(event.target.value);

  };

  React.useEffect(() => {
    getUsers();
  })


  function gotoMap() {
    Navigate("/Agencymain");
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
    <div className="notification-container">
      {alert1.map((user) => (
        user.customResourceType !== "0" && (
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
                  {/* <button className="view-map-button" onClick={gotoMap}>
                View Details
              </button> */}
                  <Popup trigger=
                    {
                      <button className="view-map-button" onClick={gotoMap}>
                        View Details
                      </button>
                    }
                    modal nested>
                    {
                      close => (
                        <div className='pop871' style={{
                          paddingLeft: "10px"
                        }}>

                          <div className='gov32' >
                            {user.alertsender}
                          </div>
                          <div>

                            <div > Type of Alert :{user.typeofrequest} </div>
                            <div > Contact Number :{user.contactNumber} </div>
                            <div >Email : {user.email} </div>
                            <div >Address :  {user.address} </div>
                            <div className='resourcse753' >
                              Resource Need:
                              {user.selectedResourceTypes.map((resource, index) => (
                                <div key={index}>{resource} ,</div>
                              ))}
                            </div>
                            <div >Number of People :  {user.customResourceType} </div>
                            <div style={{
                              fontWeight: "bold",
                              marginTop: "15px"
                            }}>Do You want to Help them? </div>
                            <div style={{
                              width: "400px"
                            }}>
                              <Form.Control type="text" placeholder="How Many People Food You Can provide?"
                                value={foodAmount}
                                onChange={handleFoodAmountChange} />
                            </div>
                          </div>

                          <div style={{
                            marginTop: "20px",
                            paddingBottom: "10px"
                          }} >
                            <Button className='xxx00' variant="danger" style={{
                              marginRight: "20px"
                            }} onClick=
                              {() => close()}>
                              close
                            </Button>
                            <Button className='xxx00' variant="success" onClick={() => {
                              ClickFoodAmountChange(user._id, user.customResourceType, user.alertsender, user.email);
                              close();
                            }}>
                              Accept
                            </Button>
                          </div>
                        </div>
                     
                      )
                    }
                  </Popup>

                </div>
              </div> </p>
          </div>
        </div>
      )
      ))}
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
}

export default AgencyMessage;

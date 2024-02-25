import React, { useState } from 'react';
import { BsDatabaseFillAdd } from 'react-icons/bs'
import { AiFillProfile } from 'react-icons/ai'
import { MdInventory } from 'react-icons/md'
import { IoIosHelpBuoy } from 'react-icons/io'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { FaAddressCard, FaAmbulance } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { MdLocalPolice } from 'react-icons/md'
import { FaFireExtinguisher } from 'react-icons/fa'
import { SiHelpdesk } from 'react-icons/si'
import { BiSolidTimeFive } from 'react-icons/bi'
import { MdPermMedia } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import './agencysidebar.css'
import '../AgencyActivity/AgencyDatabase/Agencydb/agencydb'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import detect from "../../../images/group.gif"


const Agencysidebar = (props) => {
  const [showResourcePopup, setShowResourcePopup] = useState(false);
  const [selectedResourceTypes, setSelectedResourceTypes] = useState([]);//type of resurce
  const [selectedResources, setSelectedResources] = useState([]);
  const [customResourceType, setCustomResourceType] = useState('');//others
  const[typeofrequest, settypeofrequest]= useState('Food Alert');
  const [latalert, setLat] = useState('39.9526');
  const [showDetectPopup, setShowDetectPopup] = useState(false);
  const [lonalert, setLon] = useState('75.1652');
  const[alertsender, setalertsender]= useState('');
  const[contactNumber, setcontactNumber]= useState('');
  const[address, setaddress]= useState('');
  const[email, setemail]= useState('');
  //const alertsender = props.value;
  const Navigate=useNavigate();
  const [data, setData] = React.useState(localStorage.getItem('token'));
  const [access, setAccess] = useState(null);
  // const [users, setUsers] = useState([]);
  // const [namee, setnamee] = useState('');
  React.useEffect(() => {
    async function handleData() {
      const options = {
        method: "GET",
        url: "http://localhost:8080/userRouter/profile",
        // params: { token: data },
        headers: { "Authorization": `Bearer ${data}` },
      };
      await axios

        .request(options)
        .then((response) => {
          console.log( "response"+response.data.nagency);
          setAccess(response);
          setalertsender(response.data.nagency);
          setcontactNumber(response.data.contactNumber);
          setaddress(response.data.address);
          setemail(response.data.email);
          console.log("alert" + alertsender);
          // const data = response.json();
          // setUsers(response.data);
          
          if (response.data) {
            //setAccess(response.data);

          }
        })
        .catch((error) => {
          console.error(error);
        });
      //console.log("access", access);
    }
    handleData();
  }, []);


  const sendResources  = async (event) =>  {
    //event.preventDefault();
    console.log('Selected Resource Types:', selectedResourceTypes);
    // console.log('Selected Resources:', selectedResources);
    if (selectedResourceTypes.includes('Others') && customResourceType) {
      console.log('Custom Resource Type:', customResourceType);
    }
    // Add logic to send the alert here
    //console.log("alert" + alertsender);
    ////////////

    const { data } = await axios.post('http://localhost:8080/alertRouter/foodalert', {
      selectedResourceTypes: selectedResourceTypes,
      customResourceType: customResourceType,
      time: new Date().toISOString(),
      alertsender: alertsender,
      typeofrequest :typeofrequest,
      latalert: latalert,
      lonalert: lonalert,
      contactNumber : contactNumber,
      address : address,
      email : email,

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
    setSelectedResourceTypes([]);
    setSelectedResources([]);
    setCustomResourceType('');
    closeResourcePopup();
    toast("Food Request send!");
   
  };
  
  // const sendResources  = () =>  {
  //   // setalertsender(access.data.nagency); 
  //     console.log('Selected Resource Types:', selectedResourceTypes);
  //     // console.log('Selected Resources:', selectedResources);
  //     if (selectedResourceTypes.includes('Others') && customResourceType) {
  //       console.log('Custom Resource Type:', customResourceType);
  //     }
  // }

  const openResourcePopup = () => {
    setShowResourcePopup(true);
  };

  const closeResourcePopup = () => {
    setShowResourcePopup(false);
  };

  const toggleResourceType = (resourceType) => {
    if (selectedResourceTypes.includes(resourceType)) {
      setSelectedResourceTypes((prevTypes) =>
        prevTypes.filter((type) => type !== resourceType)
      );
    } else {
      setSelectedResourceTypes((prevTypes) => [...prevTypes, resourceType]);
    }
  };

  const handleResourceChange = (resource) => {
    if (selectedResources.includes(resource)) {
      setSelectedResources((prevResources) =>
        prevResources.filter((r) => r !== resource)
      );
    } else {
      setSelectedResources((prevResources) => [...prevResources, resource]);
    }
  };

  const handleCustomResourceTypeChange = (e) => {
    setCustomResourceType(e.target.value);
  };
 
  

  const cancelResourceSelection = () => {
    setSelectedResourceTypes([]);
    setSelectedResources([]);
    setCustomResourceType('');
    closeResourcePopup();
  };
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const sendFile = () => {
    console.log('Selected File:', selectedFile);
    closePopup();
  };

  const cancelSend = () => {
    setSelectedFile(null);
    closePopup();
  };
  const [showHealthPopup, setShowHealthPopup] = useState(false);

  const openHealthPopup = () => {
    setShowHealthPopup(true);
  };

  const closeHealthPopup = () => {
    setShowHealthPopup(false);
  };

  const callDoctor = () => {
    // Replace this with the actual logic to make a call to a doctor
    console.log('Calling a doctor...');
    closeHealthPopup();
  };
  const [showAmbulancePopup, setShowAmbulancePopup] = useState(false);

  const openAmbulancePopup = () => {
    setShowAmbulancePopup(true);
  };

  const closeAmbulancePopup = () => {
    setShowAmbulancePopup(false);
  };

  const callAmbulance = () => {
    // Replace this with the actual logic to make a call to an ambulance
    console.log('Calling an ambulance...');
    closeAmbulancePopup();
  };
  const [showVolunteerPopup, setShowVolunteerPopup] = useState(false);

  const openVolunteerPopup = () => {
    setShowVolunteerPopup(true);
  };

  const closeVolunteerPopup = () => {
    setShowVolunteerPopup(false);
  };

  const sendVolunteerRequest = () => {
    // Replace this with the actual logic to send a volunteer request
    console.log('Sending a volunteer request...');
    closeVolunteerPopup();
  };
  const [showPolicePopup, setShowPolicePopup] = useState(false);

  const openPolicePopup = () => {
    setShowPolicePopup(true);
  };

  const closePolicePopup = () => {
    setShowPolicePopup(false);
  };

  const callPolice = () => {
    // Replace this with the logic to open the phone dialer with the police emergency number
    // Example: You can use the "tel:" URL to initiate a call
    window.location.href = 'tel:8582876232'; // Replace '911' with the actual police emergency number
  };
  const callFireStation = () => {
    window.location.href = 'tel:1234567890'; // Replace '1234567890' with the actual Fire Station emergency number
    closeFireExtinguisherPopup();
  };
  const [showFireExtinguisherPopup, setShowFireExtinguisherPopup] = useState(false);

const openFireExtinguisherPopup = () => {
  setShowFireExtinguisherPopup(true);
};

const closeFireExtinguisherPopup = () => {
  setShowFireExtinguisherPopup(false);
};
const [showOthersPopup, setShowOthersPopup] = useState(false);
  const [otherSupportText, setOtherSupportText] = useState('');

  const openOthersPopup = () => {
    setShowOthersPopup(true);
  };

  const closeOthersPopup = () => {
    setShowOthersPopup(false);
  };

  const FaceDetectPopupOpen = () => {
    setShowDetectPopup(true);
  };

  const FaceDetectPopupClose = () => {
   setShowDetectPopup(false);
    
  };
  const handleOtherSupportTextChange = (e) => {
    setOtherSupportText(e.target.value);
  };

  const sendOtherSupport = () => {
    // Handle sending other support information here
    console.log('Other Support Text:', otherSupportText);
    closeOthersPopup();
  };
  
  const MissingPeople = () => {
   Navigate("/MissingFormMain")
    };
    const FaceRecognition = () => {
     console.log('Notification receivedddddd:');
     console.log('Notification receivedddddd:');
     fetch('http://127.0.0.1:5000/face-recognition')
     .then(response => response.json())
     .then(data => {
       console.log('Notification triggeredddd:', data.message);
     })
     .catch(error => {
       console.error('Error triggering notification:', error);
     });
     };

  return (
    <div className='agencysideBar flex'>
      <div className='agencylogoDiv flex'>
        <img src="https://res.cloudinary.com/dosofpk8l/image/upload/v1694109434/brk_logo-removebg-preview_iavumf.png" className="img-responsive09" alt="ministry-logo" ></img>
        
        <h2 className='title01'>Bharat Raahat Kendra</h2>
      </div>
      <div className='menuDiv01'>
        <h3 className='divTitle01'>
          QUICK MENU
        </h3>
       
          <li className='listItem01'>
            <a href="/Agencymain" className='menuLink01 flex'>
              <Link to="/Agencymain">
                <AiFillHome className='icon01' />
                <span className='smallText01'>Home</span>
              </Link>
            </a>
          </li>
        

        <li className='listItem01'>
            <a href="#" className='menuLink01 flex'>
              <Link to="/AgencyDatabaseMain">
                <BsDatabaseFillAdd className='icon01' />
                <span className='smallText01'>Add Database</span>
              </Link>
            </a>
          </li>

        <li className='listItem01'>
          <a href="#" className='menuLink01 flex'>
            <Link to="/AgencyProfilemain">
              <AiFillProfile className='icon01' />
              <span className='smallText01'>My Profile</span>
            </Link>
          </a>
        </li>
        <li className='listItem01'>
          
          <a href="#" className='menuLink01 flex'>
          <Link to="/AgencyInventoryMain">
          <MdInventory className='icon01' />
            <span className='smallText01'>Inventory</span>
            </Link>
        
          </a>
        </li>
        <li className='listItem01'>
          <a href="#" className='menuLink01 flex' onClick={FaceDetectPopupOpen}>
            <FaAddressCard className='icon01' />
            <span className='smallText01'>Activity</span>
          </a>
         
        </li>
        
      </div>
      <div className='settingsDiv01'>
        <h3 className='divTitle01'>
          Ask For Support
        </h3>
     
          <li className='listItem01'>
            <a href="#" className='menuLink01 flex' onClick={openResourcePopup}>
              <IoIosHelpBuoy className='icon01' />
              <span className='smallText01'>Resources</span>
            </a>
          </li>
   
        <li className='listItem01'>
        <a href="#" className='menuLink01 flex' onClick={openHealthPopup}>
          <MdOutlineHealthAndSafety className='icon01' />
          <span className='smallText01'>Health</span>
        </a>
      </li>
      <li className='listItem01'>
        <a href="#" className='menuLink01 flex' onClick={openAmbulancePopup}>
          <FaAmbulance className='icon01' />
          <span className='smallText01'>Ambulance</span>
        </a>
      </li>
      <li className='listItem01'>
        <a href="#" className='menuLink01 flex' onClick={openVolunteerPopup}>
          <IoIosPeople className='icon01' />
          <span className='smallText01'>Volunteer</span>
        </a>
      </li>
      <li className='listItem01'>
        <a href="#" className='menuLink01 flex' onClick={openPolicePopup}>
          <MdLocalPolice className='icon01' />
          <span className='smallText01'>Police</span>
        </a>
      </li>
      <li className='listItem01'>
  <a href="#" className='menuLink01 flex' onClick={openFireExtinguisherPopup}>
    <FaFireExtinguisher className='icon01' />
    <span className='smallText01'>Fire Extinguisher</span>
  </a>
</li>
<li className='listItem01'>
            <a href="#" className='menuLink01 flex' onClick={openOthersPopup}>
              <SiHelpdesk className='icon01' />
              <span className='smallText01'>Others</span>
            </a>
          </li>
        <a href="/AgencyMessageMain" className="notification01">
          <span>Inbox</span>
          <span className="badge01">1</span>
        </a>
        <div>
          <div>
            <a href="#" className="notification02" onClick={openPopup}>
              <MdPermMedia className="icon" />
              <span>Send Picture</span>
            </a>
          </div>
          {showPopup && (
            <div className="popup01">
              <div className="popup-content01">
                <h3>Send Picture</h3>
                <input type="file" onChange={handleFileChange} />
                {selectedFile && (
                  <div className="selected-file">
                    Selected File: {selectedFile.name}
                  </div>
                )}
                <div className="popup-actions01">
                  <button className='send01' onClick={sendFile}>Send</button>
                  <button className='cancel01' onClick={cancelSend}>Cancel</button>
                </div>
              </div>
            </div>
          )}
{showResourcePopup && (
  <div className="popup01">
    <div className="popup-content01">
      <h3>Select Resource Types</h3>
      <div className="resource-type-options">
        <label>
          <input
            type="checkbox"
            value="Food"
            checked={selectedResourceTypes.includes('Food')}
            onChange={() => toggleResourceType('Food')}
          />
          Food
        </label>

        <label>
          <input
            type="checkbox"
            value="Water"
            checked={selectedResourceTypes.includes('Water')}
            onChange={() => toggleResourceType('Water')}
          />
          Water
        </label>

        <label>
          <input
            type="checkbox"
            value="Medikit"
            checked={selectedResourceTypes.includes('Medikit')}
            onChange={() => toggleResourceType('Medikit')}
          />
          Medikit
        </label>
        <label>
            <input
              type="checkbox"
              value="Shelter"
              checked={selectedResources.includes('Shelter')}
              onChange={() => handleResourceChange('Shelter')}
            />
            Shelter
          </label>
          <label>
            <input
              type="checkbox"
              value="Blanket"
              checked={selectedResources.includes('Blanket')}
              onChange={() => handleResourceChange('Blanket')}
            />
            Blanket
          </label>
          <div>
        <label>
          <input
            type="radio"
            value="Others"
            checked={selectedResourceTypes.includes('Others')}
            onChange={() => toggleResourceType('Others')}
          />
          People
        </label></div>
        
      </div>

      {/* Show the resource selection checkboxes for selected resource types */}
      {selectedResourceTypes.includes('Others') && (
        <div className="resource-options">
           <label>
        <input
          type="text"
          placeholder="Number of People "
          value={customResourceType}
          onChange={handleCustomResourceTypeChange}
        />
      </label>
          {/* Add more resources here as needed */}
        </div>
      )}

      <div className="popup-actions01">
        <button className='send01' onClick={sendResources}>Send</button>
        <button className='cancel01' onClick={cancelResourceSelection}>Cancel</button>
      </div>
    </div>
  </div>
)}
{showHealthPopup && (
        <div className="popup01">
          <div className="popup-content01">
            <h3>Do you want to call a doctor?</h3>
            <div className="popup-actions01">
              <button className='send01' onClick={callDoctor}>Call Now</button>
              <button className='cancel01' onClick={closeHealthPopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
  {showAmbulancePopup && (
        <div className="popup01">
          <div className="popup-content01">
            <h3>Do you want to call an ambulance?</h3>
            <div className="popup-actions01">
              <button className='send01' onClick={callAmbulance}>Call Now</button>
              <button className='cancel01' onClick={closeAmbulancePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
 {showVolunteerPopup && (
        <div className="popup01">
          <div className="popup-content01">
            <h3>Do you want to send a volunteer request?</h3>
            <div className="popup-actions01">
              <button className='send01' onClick={sendVolunteerRequest}>Send</button>
              <button className='cancel01' onClick={closeVolunteerPopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showPolicePopup && (
        <div className="popup01">
          <div className="popup-content01">
            <h3>Do you want to call the police?</h3>
            <div className="popup-actions01">
              <button className='send01' onClick={callPolice}>Call Now</button>
              <button className='cancel01' onClick={closePolicePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showFireExtinguisherPopup && (
  <div className="popup01">
    <div className="popup-content01">
      <h3>Do you want to call the Fire Station?</h3>
      <div className="popup-actions01">
        <button className='send01' onClick={callFireStation}>Call Now</button>
        <button className='cancel01' onClick={closeFireExtinguisherPopup}>Cancel</button>
      </div>
    </div>
  </div>
)}
{showDetectPopup && (
  <div className='overlay012'>
    <div className='modalContainer012'>
      <img src ={detect} alt = "detect" className='detectimage012'></img>
      <div className='modalRight012'>
        <p className='closebtn012' onClick={FaceDetectPopupClose}>X</p>
        <div className='btnContainer012'>
        <button className='list012'>Missing People List</button>
        <button className='detect012' onClick={FaceRecognition}>Face Detection</button>
        <button className='register012'  onClick={MissingPeople}>Register Missing People</button>
        </div>
        </div>

    </div>

  </div>
)}
  {showOthersPopup && (
          <div className="popup01">
            <div className="popup-content01">
              <h3>What other support do you need?</h3>
              <input
                type="text"
                placeholder="Enter your request here"
                value={otherSupportText}
                onChange={handleOtherSupportTextChange}
              />
              <div className="popup-actions01">
                <button className='send01' onClick={sendOtherSupport}>Send</button>
                <button className='cancel01' onClick={closeOthersPopup}>Cancel</button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
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

export default Agencysidebar;


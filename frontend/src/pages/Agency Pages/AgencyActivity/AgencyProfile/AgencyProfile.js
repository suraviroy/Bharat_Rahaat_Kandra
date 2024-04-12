// AgentProfile.js
import React from 'react';
import './AgencyProfile.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Agencytop from '../../TopSection/agencytop';
import AgencyProfileBody from './AgencyProfileBody';

const AgencyProfile = () => {

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
          console.log(response.data.contactNumber);
          // const data = response.json();
          // setUsers(response.data);
          setAccess(response);
          window.localStorage.setItem("id",response.data.storU);
          window.localStorage.setItem("name",response.data.nagency);
          window.localStorage.setItem("phno",response.data.contactNumber);
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
  
  // const wrapperFunction = (value) => {
  //   return <Agencytop value={value} />;
  // };
  //   const [alert, setalert] = useState(null);
  //   const [alertnumber, setalertnumber] = useState(0);
  //  async function getAlert(){
  //   const options = {
  //     method: "GET",
  //     url: "http://localhost:8080/useralert/profile",
  //     // params: { token: data },
  //     headers: { "Authorization": `Bearer ${data}` },
  //   };
  //   await axios

  //     .request(options)
  //     .then((response) => {
  //       console.log(response);
  //       // const data = response.json();
  //       // setUsers(response.data);
  //       setalert(response);
  //       if (response.length !== alertnumber) {
  //         setalertnumber(response.length)
  //         //tost
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //  }
  const agencyDetails = {
    image: '../images/tiasha.jpeg',
    category: 'Shelter',
    headName: 'TIASHA MANDAL',
    contactNumber: '123-456-7890',
    email: 'tiashamandal21@gmail.com',
    agencyName: 'Janakalyan Agency',
    agencyId: 'AG12345',
    adharNumber: '1234-5678-9012',
    address: '123 Main St, City',
    pin: '12345',
    report1: 'Report 1 Data',
    report2: 'Report 2 Data',
    userId: 'tiasha@123',
    password: '********',
  };

  return (

    <div className="agent-profile09">
      {/* <div className='topbar367'><Agencytop /></div> */}
      <h1 className='aphead09'>Agency Details</h1>
      <div className="agency-details09">
        {access &&
          <div className="image09" >
            <img className="image099" src={access.data.imageP} alt={access.data.nagency} />
          </div>
        }
        {access &&
          <div className="info09" >

            <h2 className='aphead45'>{access.data.name}</h2>
            <p className='apblock09'>Agency Category: {access.data.doctorName}</p>
            <p className='apblock09'>Contact Number: {access.data.contactNumber}</p>
            <p className='apblock09'>Email: {access.data.email}</p>
            <p className='apblock09'>Agency Name: {access.data.nagency}</p>
            <p className='apblock09'>Agency ID: {access.data.idNumber}</p>
            <p className='apblock09'>Adhar Number: {access.data.aadharNumber}</p>
            <p className='apblock09'>Address: {access.data.address}</p>
            <p className='apblock09'>Pin: {access.data.pin}</p>
            <p className='apblock09'> Report 1: {access.data.guardianName}</p>
            <p className='apblock09'>Report 2: {access.data.guardianRelation}</p>
            <p className='apblock09'>User ID: {access.data.storU}</p>
            <p className='apblock09'>Password: {agencyDetails.password}</p>
            {/* <p  className='hidden09'>
              <Agencytop value={access.data.nagency} /> 
            </p> */}
            
          </div>
        }
      </div>

    </div>

  );
};

export default AgencyProfile;

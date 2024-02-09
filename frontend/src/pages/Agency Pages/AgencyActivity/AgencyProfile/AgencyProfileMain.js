import React from 'react';
import axios from 'axios';
import "./AgencyProfileMain.css";
import { useEffect, useState } from "react";
import AgencyProfileBody from './AgencyProfileBody';
import Agencysidebar from '../../AgencySideBar/agencysidebar';

function AgencyProfilemain() {

  // const [data, setData] = React.useState(localStorage.getItem('token'));
  // const [access, setAccess] = useState(null);
  // // const [users, setUsers] = useState([]);
  // // const [namee, setnamee] = useState('');
  // React.useEffect(() => {
  //   async function handleData() {
  //     const options = {
  //       method: "GET",
  //       url: "http://localhost:8080/userRouter/profile",
  //       // params: { token: data },
  //       headers: { "Authorization": `Bearer ${data}` },
  //     };
  //     await axios

  //       .request(options)
  //       .then((response) => {
  //         console.log(response);
  //         // const data = response.json();
  //         // setUsers(response.data);
  //         setAccess(response);
  //         if (response.data) {
  //           //setAccess(response.data);

  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //     //console.log("access", access);
  //   }
  //   handleData();
  // }, []);



  return (
   
    <div className="container01">
      
    
      {/* {access &&   */}
       <Agencysidebar />
      <AgencyProfileBody/>
       
    </div>
      );
    }
    
    export default AgencyProfilemain;
    
import React from 'react'
import './AgencyProfileBody.css'
import axios from 'axios';
import { useEffect, useState } from "react";
import AgencyProfile from '../AgencyProfile/AgencyProfile'
import Agencytop from '../../TopSection/agencytop'

const AgencyProfileBody = (props) => {
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
          console.log(response);
          // const data = response.json();
          // setUsers(response.data);
          setAccess(response);
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

  const values=access
  ? {
      nagency: access.data.nagency,
      contactNumber: access.data.contactNumber,
      email: access.data.email,
      address: access.data.address,
    }
  : null;

    return (
        <div className='mainContent02'>
          {access &&   <Agencytop value={values} />}
            
        <div className='bottom02 flex'>
          <AgencyProfile/>
        </div>
        </div>
       
        
    )
}
export default AgencyProfileBody;
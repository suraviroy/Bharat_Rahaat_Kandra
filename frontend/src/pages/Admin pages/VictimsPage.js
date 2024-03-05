import React, { useState } from 'react';
import './VictimsPage.css';
import Header from './Header';
import Navigation from './Navigation';
import SidePanel from './SidePanel';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';



const VictimsPage = () => {
  // const users = [
  //   {
  //     doctorName: "Dr. John Doe",
  //     nagency: "Hospital ABC",
  //     idNumber: "123456",
  //     state: "California",
  //     skills: "Internal Medicine, Cardiology"
  //   },
  //   {
  //     doctorName: "Dr. Jane Smith",
  //     nagency: "Clinic XYZ",
  //     idNumber: "789012",
  //     state: "New York",
  //     skills: "Pediatrics, Dermatology"
  //   },
  //   {
  //     doctorName: "Dr. David Lee",
  //     nagency: "Medical Center DEF",
  //     idNumber: "345678",
  //     state: "Texas",
  //     skills: "Orthopedics, Neurology"
  //   },
  // ];
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/victimRouter/affectpeople', {
      method: 'GET',
    })
    const data = await response.json();
    setUsers(data);
    //console.log(data)
  }

  React.useEffect(() => {
    getUsers();
  }, [])

  function sendmail(name,email){
    console.log(name,email)
  }

  return (
    <div className="victimspage2451">
      <div className='vichead2451'> <Header /></div>
      <div className='vichead2451'><Navigation /></div>
      <div className='vicverify2451'> Affected People Information</div>
      <div className='cols-row-md-3 viccard2450' style={{width: '96rem'}}>
      {users.map((user)=>(
      <Card className='viccard2451'>
      <Card.Img variant="top" src={user.image} className='vicimage2451'/>
      <Card.Body className='vicbody2451'>
        <Card.Title>Name: {user.name}</Card.Title>
        <Card.Text>
          Address: {user.address}
        </Card.Text>
        <Popup trigger=
                    {<Button className='vicbutton1' >View Details</Button>}
                    modal nested>
                    {
                      close => (
                        <div className='vicpopup2451'>
                          <div className='vicdetails2451'>
                            <div className='vicvalue2450'>Picture:</div>
                            <img className='vicimg2451' src={user.image}></img>
                            <br></br>
                            <br></br>
                            <div className='vicdetails245'>
                            <div className='vicvalue2452'>Details:</div>
                            <div className='vicvalue2453'><div className='vicvalue2451'>Name of Victim: </div>{user.name}</div>
                            <div className='vicvalue2453'><div className='vicvalue2451'>Contact Number: </div>{user.phNumber}</div>
                            <div className='vicvalue2453'><div className='vicvalue2451'>Alternate Contact Number: </div>{user.alPhNumber}</div>
                            <div className='vicvalue2453'><div className='vicvalue2451'>Email ID: </div>{user.email}</div>
                            <div className='vicvalue2453'><div className='vicvalue2451'>Aadhar Number: </div>{user.adharNumber}</div>
                            <div className='vicvalue2453'><div className='vicvalue2451'>Address: </div>{user.address}</div>
                            {/* <div className='vicvalue2453'><div className='vicvalue2451'>Pin Code: </div></div> */}
                            <div className='vicvalue2453'><div className='vicvalue2451'>State: </div>{user.state}</div>
                            <div className='vicvalue2453'><div className='vicvalue2451'>Date: </div>{user.Pdate}</div>
                            <div className='vicvalue2453'><div className='vicvalue2451'>Time: </div>{user.Ptime}</div>
                            <div className='vicvalue2453'><div className='vicvalue2451'>Recognized By: </div>{user.recogniseBy}</div>
                            </div>
                          </div>

                          <Button className='vicxxx' onClick=
                            {() => close()}>
                            X
                          </Button>
                        </div>
                      )
                    }
                  </Popup>
        <Button variant="primary" className='vicbutton2' onClick={() =>{sendmail(user.name,user.email)}}>Send</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
      <SidePanel />
    </div>
  );
};
export default VictimsPage;

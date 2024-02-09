import React, { useState } from 'react';
import './VerificationsPage.css';
import Header from './Header';
import Navigation from './Navigation';
import SidePanel from './SidePanel';
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Popup from 'reactjs-popup';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const VerificationsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [popup, setPop] = useState(false);
  const [tdata, settdata] = useState([]);
  // const [storU, setUsername] = useState("");
  //   const [storP, setPassword] = useState("");
  const [statuss, setstatuss] = useState('');
  const [userId, setUserId] = useState(''); // Provide the user's ID to update
  const Navigate = useNavigate();

  async function sendEmailReject(email, name,id) {
    console.log(email, name);
    // const emailParams = {
    //   to_email: email,
    //   username: username,
    //   password: password,
    //   name:name
    // };
    // Create a hidden form element
    const hiddenForm1 = document.createElement('form');
    hiddenForm1.style.display = 'none';

    // Add input fields for your data
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.name = 'email';
    emailInput.value = email;
    hiddenForm1.appendChild(emailInput);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.value = name;
    hiddenForm1.appendChild(nameInput);
    //console.log(hiddenForm.password.value)
    // Append the hidden form to the document body
    document.body.appendChild(hiddenForm1);
    await emailjs.sendForm('service_6mm4ca3', 'template_4wmnpih', hiddenForm1, 'pva78rSU-wfUm1Ocq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    document.body.removeChild(hiddenForm1);

    const response = await fetch('http://localhost:8080/userRouter/changeStatusR', {
      method: 'PUT',
      body: JSON.stringify({ id, statuss }),
      // body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data1 = await response.json();
    console.log(data1);

    //handleUpdate();
    Navigate("/VerificationsPage");
    window.location.reload();
  }

  async function sendEmail(username, password, email, name, id) {
    console.log(username, password, email, name);
    // const emailParams = {
    //   to_email: email,
    //   username: username,
    //   password: password,
    //   name:name
    // };
    // Create a hidden form element
    const hiddenForm = document.createElement('form');
    hiddenForm.style.display = 'none';

    // Add input fields for your data
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.name = 'email';
    emailInput.value = email;
    hiddenForm.appendChild(emailInput);

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.value = username;
    hiddenForm.appendChild(usernameInput);

    const passwordInput = document.createElement('input');
    passwordInput.type = 'text';
    passwordInput.name = 'password';
    passwordInput.value = password;
    hiddenForm.appendChild(passwordInput);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.value = name;
    hiddenForm.appendChild(nameInput);
    //console.log(hiddenForm.password.value)
    // Append the hidden form to the document body
    document.body.appendChild(hiddenForm);
    await emailjs.sendForm('service_6mm4ca3', 'template_ttlvnbq', hiddenForm, 'pva78rSU-wfUm1Ocq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    document.body.removeChild(hiddenForm);

    // setstatuss('Verified');
    // setUserId(id)
    const response = await fetch('http://localhost:8080/userRouter/changeStatus', {
      method: 'PUT',
      body: JSON.stringify({ id, statuss }),
      // body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data1 = await response.json();
    console.log(data1);

    //handleUpdate();
     Navigate("/VerificationsPage");
    window.location.reload();
    //window.location.href = "./VerificationsPage"
  }
  // const handleUpdate = async () => {
  //   try {
  //     const response = await axios.put(`http://localhost:8080/userRouter/changeStatus/${userId}`, { statuss });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };



  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/userRouter/verification', {
      method: 'GET',
    })
    const data = await response.json();
    setUsers(data.data);
  }

  React.useEffect(() => {
    getUsers();

  }, [])

  return (
    <div className="verifications-page8256">
      <div className='header567'> <Header /></div>
      <div className='header567'><Navigation /></div>
      <div className='verify134'> Verification Requests</div>
      <Table striped bordered hover variant="" className="verifications-table8256">
        <thead>
          <tr>
            <th>Type of agency</th>
            <th>Agency name</th>
            <th>Agency ID</th>
            <th>State</th>
            <th>More Info</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users
            // .filter((user) => {
            //   return search.toLowerCase() === ""
            //     ? user
            //     : user.skills.toLowerCase().includes(search);
            // })
            .map((user) => (
              <tr >

                <td>{user.doctorName}</td>
                <td>{user.nagency}</td>
                <td>{user.idNumber}</td>
                <td>{user.state}</td>

                <td>
                  <Popup trigger=
                    {<Button className='a479' >View</Button>}
                    modal nested>
                    {
                      close => (
                        <div className='popup9901'>
                          <div className='other45'></div>
                          <div className='content89'>
                            {user.nagency}
                          </div>
                          <div className='details21'>
                            <div className='values321'> <div className='values121'>Name of Chief Executive Officer :</div>  {user.name} </div>
                            <div className='values321'> <div className='values121'>Type of Service :</div>  {user.doctorName} </div>
                            <div className='values321'> <div className='values121'>Contact Number :</div>  {user.contactNumber} </div>
                            <div className='values321'> <div className='values121'>Email :</div>  {user.email} </div>
                            <div className='values321'> <div className='values121'>Agency ID :</div>  {user.idNumber} </div>
                            <div className='values321'> <div className='values121'>Aadhar Number :</div>  {user.aadharNumber} </div>
                            <div className='values3210'> <div className='values1210'>Address :</div>  {user.address} </div>
                            <div className='values321'> <div className='values121'>Pin Code:</div>  {user.pin} </div>
                            <div className='values321'> <div className='values121'>State :</div>  {user.state} </div>
                            <div className='values321'> <div className='values121'>Status :</div>  {user.statuss} </div>
                            <div className='btn89'><Button className='btn99' variant="success"
                              onClick={() => {
                                sendEmail(user.storU, user.storP, user.email, user.name, user._id)
                                close();
                                console.log('Close function called');
                              }} >Accept</Button>
                              <Button className='btn99' variant="danger"
                                onClick={() => {
                                  sendEmailReject(user.email, user.name,user._id)
                                  close();
                                  console.log('Close function called');
                                }}>Reject</Button></div>
                            <div className='pic45'>
                              <div className='values121'>Certificate :</div><img className='img45' src={user.imageC} alt='img' />
                              <div className='values121'>Picture :</div>
                              <img className='img45' src={user.imageP} alt='img' />
                            </div>
                          </div>

                          <Button className='xxx' onClick=
                            {() => close()}>
                            X
                          </Button>
                        </div>

                      )
                    }
                  </Popup>
                </td>
                {/* <td >
                  <Button className='a479' variant="primary" onClick={handleClickOpen(user._id)}>More</Button>
                </td> */}

                <td>{user.statuss}</td>
                {/* <td>{user.email}</td>
                <td>{user.badge}</td>
                <td>{user.skills}</td> */}

                {/* {
                    popup ?
                      <div className="main56">
                        <div className="popup99">
                          <div className="popup-header99">
                            <div className='company010'>{tdata.nagency}</div>
                            <Link className='xxx' onClick={closePopup}>X</Link>
                          </div>
                          <div>
                            <div><h1> Name of chief executive officer : </h1>{user.name}</div>
                          </div>
                        </div>
                      </div> : ""
                  } */}


              </tr>
            )
            )
          }
        </tbody>
      </Table>
      <SidePanel />
    </div>
  );
};
export default VerificationsPage;
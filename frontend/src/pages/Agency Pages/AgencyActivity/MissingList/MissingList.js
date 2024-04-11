import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './MissingList.css'

const AgencyMissingList = () => {
  const [showPopup, setShowPopup] = useState(null);

  const togglePopup = (personIndex) => {
    setShowPopup(personIndex);
  };

  // const data = [
  //   {
  //     name: 'John Doe',
  //     age: 30,
  //     gender: 'Male',
  //     aadharNumber: '1234 5678 9012',
  //     phoneNumber: '1234567890',
  //     email: 'johndoe@example.com',
  //     address: '123 Street, City',
  //     dateOfRegister: '2024-03-05',
  //     timeOfRegister: '10:00 AM',
  //     imageUrl: "https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg"
  //   },
  //   {
  //     name: 'Suravi Roy',
  //     age: 20,
  //     gender: 'Female',
  //     aadharNumber: '1234 5678 9012',
  //     phoneNumber: '9876543210',
  //     email: 'suraviroy@example.com',
  //     address: '456 Avenue, Town',
  //     dateOfRegister: '2024-03-05',
  //     timeOfRegister: '11:00 AM',
  //     imageUrl: "https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg"
  //   },
  //   {
  //     name: 'Aitijhya saha',
  //     age: 20,
  //     gender: 'Female',
  //     aadharNumber: '1234 5678 9012',
  //     phoneNumber: '4567890123',
  //     email: 'aitijhyasaha@example.com',
  //     address: '789 Road, Village',
  //     dateOfRegister: '2024-03-05',
  //     timeOfRegister: '12:00 PM',
  //     imageUrl: "https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg"
  //   },
  // ];
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/victimRouter/missingpeopleList', {
      method: 'GET',
    })
    const data = await response.json();
    setUsers(data);
    
    //console.log(data)
  }

  React.useEffect(() => {
    getUsers();
  }, [])
  return (
      <div>
        <div className="table-heading7798" style={{color: '#002b2e'}}>
          <h2>Missing Persons List</h2>
      </div><div className="table7808">
              <div className="row781 header7828">
                  <div className="cell7838">Photo</div>
                  <div className="cell7838">Name</div>
                  <div className="cell7838">Age</div>
                  <div className="cell7838">Gender</div>
                  <div className="cell7838">Aadhar Number</div>
                  <div className="cell7838">View Details</div>
              </div>
              {users.map((person, index) => (
                  <div key={index} className="row7818">
                      <div className="cell7838">
                          {person.image && (
                              <div className="profile-image7868">
                                  <img src={person.image} alt="Profile" />
                              </div>
                          )}
                      </div>
                      <div className="cell7838">{person.name}</div>
                      <div className="cell7838">{person.age}</div>
                      <div className="cell7838">{person.gender}</div>
                      <div className="cell7838">{person.adharNumber}</div>
                      <div className="cell7838">
                          <button onClick={() => togglePopup(index)}>More Info.</button>
                          {showPopup === index && (
                              <Popup
                                  open={true}
                                  closeOnDocumentClick
                                  onClose={() => setShowPopup(null)}
                                  modal
                                  className="custom-popup7908"
                              >
                                  <div className="popup-content7918">
                                      <div className="left-half7928">
                                          <div className="blue-background7948">
                                              <span className="close-button8028" onClick={() => setShowPopup(null)}>X</span>
                                              <div className="content-wrapper7968">
                                                  <div className="missing-text7978">Missing</div>
                                                  <div className="profile-picture7988">
                                                      <img src={person.image} alt="Missing Person" />
                                                  </div>
                                                  <div className="name7998">{person.name}</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="right-half7938">
                                          <div className="white-background7958">
                                              <div className="info-wrapper80088">
                                                  <div className="info-item8018">Age: {person.age}</div>
                                                  <div className="info-item8018">Gender: {person.gender}</div>
                                                  <div className="info-item8018">AAdhar Number: {person.adharNumber}</div>
                                                  <div className="info-item8018">Phone Number: {person.phNumber}</div>
                                                  <div className="info-item8018">Email ID: {person.email}</div>
                                                  <div className="info-item8018">Address: {person.address}</div>
                                                  <div className="info-item8018">Date of Register: {person.Pdate}</div>
                                                  <div className="info-item8018">Time of Register: {person.Ptime}</div>
                                              </div>
                                              <span className="close-button8028" onClick={() => setShowPopup(null)}>X</span>
                                          </div>
                                      </div>
                                  </div>
                              </Popup>
                          )}
                      </div>
                  </div>
              ))}
          </div></div>
  );
};

export default AgencyMissingList;
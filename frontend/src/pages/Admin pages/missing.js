import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './missing.css';
import Header from './Header';
import Navigation from './Navigation';
import SidePanel from './SidePanel';

const MissingList = () => {
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
    <>
      <Header />
      <Navigation />
      <div className="table-heading779">
        <h2>Missing Persons List</h2>
      </div>
      <div className="table780">
        <div className="row781 header782">
          <div className="cell783">Photo</div>
          <div className="cell783">Name</div>
          <div className="cell783">Age</div>
          <div className="cell783">Gender</div>
          <div className="cell783">Aadhar Number</div>
          <div className="cell783">View Details</div>
        </div>
        {users.map((person, index) => (
          <div key={index} className="row781">
            <div className="cell783">
              {person.image && (
                <div className="profile-image786">
                  <img src={person.image} alt="Profile" />
                </div>
              )}
            </div>
            <div className="cell783">{person.name}</div>
            <div className="cell783">{person.age}</div>
            <div className="cell783">{person.gender}</div>
            <div className="cell783">{person.adharNumber}</div>
            <div className="cell783">
              <button onClick={() => togglePopup(index)}>More Info.</button>
              {showPopup === index && (
                <Popup
                  open={true}
                  closeOnDocumentClick
                  onClose={() => setShowPopup(null)}
                  modal
                  className="custom-popup790"
                >
                  <div className="popup-content791">
                    <div className="left-half792">
                      <div className="blue-background794">
                        <span className="close-button802" onClick={() => setShowPopup(null)}>X</span>
                        <div className="content-wrapper796">
                          <div className="missing-text797">Missing</div>
                          <div className="profile-picture798">
                            <img src={person.image} alt="Missing Person" />
                          </div>
                          <div className="name799">{person.name}</div>
                        </div>
                      </div>
                    </div>
                    <div className="right-half793">
                      <div className="white-background795">
                        <div className="info-wrapper800">
                          <div className="info-item801">Age: {person.age}</div>
                          <div className="info-item801">Gender: {person.gender}</div>
                          <div className="info-item801">AAdhar Number: {person.adharNumber}</div>
                          <div className="info-item801">Phone Number: {person.phNumber}</div>
                          <div className="info-item801">Email ID: {person.email}</div>
                          <div className="info-item801">Address: {person.address}</div>
                          <div className="info-item801">Date of Register: {person.Pdate}</div>
                          <div className="info-item801">Time of Register: {person.Ptime}</div>
                        </div>
                        <span className="close-button802" onClick={() => setShowPopup(null)}>X</span>
                      </div>
                    </div>
                  </div>
                </Popup>
              )}
            </div>
          </div>
        ))}
      </div>
      <SidePanel />
    </>
  );
};

export default MissingList;
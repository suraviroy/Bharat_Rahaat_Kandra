import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './AgencyDirectory.css';
import Header from './Header';
import Navigation from './Navigation';
import SidePanel from './SidePanel';

const AgencyDirectory = () => {

  // const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/userRouter/invertory', {
      method: 'GET',
    })
    const data = await response.json();
    setUsers(data.data);
  }

  React.useEffect(() => {
    getUsers();

  }, [])
  //   const [showPopup, setShowPopup] = useState(false);

  //   const togglePopup = () => {
  //     setShowPopup(!showPopup);
  //   };

  //   const tableData = [
  //     { typeOfAgency: '', agencyName: '', agencyID: '', state: '' },
  //     { typeOfAgency: '', agencyName: '', agencyID: '', state: '' },
  //     { typeOfAgency: '', agencyName: '', agencyID: '', state: '' },
  //     { typeOfAgency: '', agencyName: '', agencyID: '', state: '' },
  //     { typeOfAgency: '', agencyName: '', agencyID: '', state: '' },
  //     { typeOfAgency: '', agencyName: '', agencyID: '', state: '' },
  //     { typeOfAgency: '', agencyName: '', agencyID: '', state: '' },
  //     { typeOfAgency: '', agencyName: '', agencyID: '', state: '' },
  //     { typeOfAgency: '', agencyName: '', agencyID: '', state: '' },
  //     { typeOfAgency: '', agencyName: '', agencyID: '', state: '' },
  //   ];
  // const renderResourceQuantities = (resourceQuantities) => {
  //   // Check if resourceQuantities is an object
  //   if (typeof resourceQuantities === 'object' && resourceQuantities !== null) {
  //     return Object.entries(resourceQuantities).map(([resource, quantity]) => (
  //       <div key={resource}>
  //         <strong>{resource}:</strong> {quantity}
  //       </div>
  //     ));
  //   } else {
  //     return <div>No resource quantities available</div>;
  //   }
  // };
  return (
    <div>
      <div className='header5677'> <Header /></div>
      <div className='header5677'><Navigation /></div>
      <div className='verify13488'> Agency Inventory</div>
      <Table striped bordered hover variant="" className="verifications-table8222">
        <thead>
          <tr>
          <div className="serc101">

<input
    type="search"
    className="search11"
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search for Agency"
    aria-label="Search"
    aria-describedby="search-addon"
/>
</div>
            {/* <th>Type of agency</th> */}
            <th>Agency name</th>
            <th>Agency ID</th>
            <th>State</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => {
              return search.toLowerCase() === ""
                  ? user
                  : user.doctorName.toLowerCase().includes(search);
          })
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
                        <div className='popup99019'>

                          <div className='content89'>
                            {user.nagency}
                          </div>
                          <div className='invertory675'>
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
                            </div>
                            <div className='details219'>
                              <div className='values321'> <div className='values121'>Resources :</div>
                                {user.resources &&
                                  user.resources[0] &&
                                  user.resources[0].resources &&
                                  user.resources[0].resources.map((resource, index) => (
                                    <div key={index}>{resource} ,</div>
                                  ))}
                              </div>
                              {/* <div className='values321'>
                                <div className='values121'>Resource Quantities: </div>
                                {user.resourceQuantities &&
                                  typeof user.resourceQuantities === 'object' &&
                                  Object.entries(user.resourceQuantities.resourceQuantities).map(([resource, quantity], index) => (
                                    <div key={index}>
                                      <strong>{resource} :</strong> {quantity} <br></br>
                                      <br />
                                    </div>
                                    
                                  ))}
                              </div> */}
                              <div className='values321'>
                                <div className='values121'>Resource Quantities:</div>
                                <div>
                                  {user.resourceQuantities &&
                                    typeof user.resourceQuantities === 'object' &&
                                    Object.entries(user.resourceQuantities.resourceQuantities).map(([resource, quantity], index) => (
                                      <div key={index}>
                                        <strong>{resource} :</strong> {quantity} <br />
                                      </div>
                                    ))}
                                </div>
                              </div>
                              <div className='values321'>
                                <div className='values121'>Shelter Occupancy : </div>
                                {user.shelterOccupancy && typeof user.shelterOccupancy === 'object' ? (
                                  <div>{user.shelterOccupancy.shelterOccupancy}</div>
                                ) : (
                                  <div>No shelter occupancy data available</div>
                                )}
                              </div>
                              <div className='values321'>
                                <div className='values121'>Members :</div>
                                {user.members && Array.isArray(user.members) && user.members.length > 0 ? (
                                  user.members.map((member, index) => (
                                    <div key={index} className="member-details981">
                                      <strong>Name:</strong> {member.namem}<br />
                                      <strong>Role:</strong> {member.role}<br />
                                      <strong>Contact Info:</strong> {member.contactInfo}<br />
                                      <strong>Shift:</strong> {member.shift}<br />
                                      <br />
                                    </div>
                                  ))
                                ) : (
                                  <div>No member data available</div>
                                )}
                              </div>



                              {/* <div className='values321'> <div className='values121'>Type of Service :</div>  {user.doctorName} </div>
                              <div className='values321'> <div className='values121'>Contact Number :</div>  {user.contactNumber} </div>
                              <div className='values321'> <div className='values121'>Email :</div>  {user.email} </div>
                              <div className='values321'> <div className='values121'>Agency ID :</div>  {user.idNumber} </div>
                              <div className='values321'> <div className='values121'>Aadhar Number :</div>  {user.aadharNumber} </div>
                              <div className='values3210'> <div className='values1210'>Address :</div>  {user.address} </div>
                              <div className='values321'> <div className='values121'>Pin Code:</div>  {user.pin} </div>
                              <div className='values321'> <div className='values121'>State :</div>  {user.state} </div>
                              <div className='values321'> <div className='values121'>Status :</div>  {user.statuss} </div> */}
                            </div>
                          </div>

                          <Button className='xxx8' onClick=
                            {() => close()}>
                            X
                          </Button>
                        </div>
                      )
                    }
                  </Popup>
                </td>
              </tr>

            )
            )
          }
        </tbody>
        {/* <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData.typeOfAgency}</td>
              <td>{rowData.agencyName}</td>
              <td>{rowData.agencyID}</td>
              <td>{rowData.state}</td>
              <td>
                <Button className="more-info-button91" onClick={togglePopup}>
                  More Info
                </Button>
                {showPopup && (
                  <Popup
                    open={showPopup}
                    closeOnDocumentClick
                    onClose={togglePopup}
                    nested
                    modal
                    className="popup-container91"
                  >
                    {(close) => (
                      <div className="popup-content91">
                        <div className="popup-header91">
                          <span className="close-button91" onClick={close}>
                            X
                          </span>
                        </div>
                        
                      </div>
                    )}
                  </Popup>
                )}
              </td>
            </tr>
          ))}
        </tbody> */}
      </Table>
      <SidePanel />
    </div>


    /* <div>
    
    <div className='header5679'> <Header /></div>
          <div className='header56790'><Navigation /></div>
          ?
          <Table striped bordered hover variant="" className="verifications-table82">
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
           
                </Table>
    </div> */
  );
};

export default AgencyDirectory;
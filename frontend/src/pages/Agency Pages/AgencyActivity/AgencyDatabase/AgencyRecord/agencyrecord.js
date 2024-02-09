import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './agencyrecord.css';
import { Link } from 'react-router-dom';


 function AgencyRecord () {
  const [emergencyContactNumbers, setEmergencyContactNumbers] = useState(['']);
  const [photosOrVideos, setPhotosOrVideos] = useState([]);
  const [incidentReports, setIncidentReports] = useState([]);
  const [resourceAllocationRecords, setResourceAllocationRecords] = useState([]);
  const [residentRegistrationForms, setResidentRegistrationForms] = useState([]);
  const [signature, setSignature] = useState('');
  const [recommendations, setRecommendations] = useState('');

  const handleEmergencyContactChange = (index, value) => {
    const updatedNumbers = [...emergencyContactNumbers];
    updatedNumbers[index] = value;
    setEmergencyContactNumbers(updatedNumbers);
  };

  const handleAddEmergencyContact = () => {
    setEmergencyContactNumbers([...emergencyContactNumbers, '']);
  };

  const handlePhotoOrVideoUpload = (e) => {
    const files = e.target.files;
    setPhotosOrVideos([...photosOrVideos, ...files]);
  };

  const handleIncidentReportUpload = (e) => {
    const files = e.target.files;
    setIncidentReports([...incidentReports, ...files]);
  };

  const handleResourceAllocationRecordUpload = (e) => {
    const files = e.target.files;
    setResourceAllocationRecords([...resourceAllocationRecords, ...files]);
  };

  const handleResidentRegistrationFormUpload = (e) => {
    const files = e.target.files;
    setResidentRegistrationForms([...residentRegistrationForms, ...files]);
  };
  const Navigate = useNavigate();
  const arhandleSubmit54 = () => {
    // Handle form submission here
    console.log({
      emergencyContactNumbers,
      photosOrVideos,
      incidentReports,
      resourceAllocationRecords,
      residentRegistrationForms,
      signature,
      recommendations,
    });
    
  };

  return (
    <div className='arbody45'>
    <div className='artitle45'>
     
      <div className='arhead45'>
        <h2 className='artag45'>6. Communication</h2>
        <div>
          <label className='ardata45'>Emergency Contact Numbers</label>
          {emergencyContactNumbers.map((number, index) => (
            <input className='int45'
              key={index}
              type="text"
              value={number}
              onChange={(e) => handleEmergencyContactChange(index, e.target.value)}
            />
          ))}
          <button className= 'arbutton45'onClick={handleAddEmergencyContact}>Add Number</button>
        </div>
      </div>
      <div>
        <h2  className='artag45'>7. Document Uploads</h2>
        <div>
          <label  className='ardata45'>Photos or Videos of Shelter Conditions</label>
          <input  className= 'inputf45' type="file" multiple onChange={handlePhotoOrVideoUpload} />
        </div>
        <div>
          <label  className='ardata45'>Incident Reports</label>
          <input className= 'inputf45' type="file" multiple onChange={handleIncidentReportUpload} />
        </div>
        <div>
          <label  className='ardata45'>Resource Allocation Records</label>
          <input  className= 'inputf45' type="file" multiple onChange={handleResourceAllocationRecordUpload} />
        </div>
        <div>
          <label  className='ardata45'>Resident Registration Forms</label>
          <input className= 'inputf45' type="file" multiple onChange={handleResidentRegistrationFormUpload} />
        </div>
      </div>
      <div>
        <h2 className='artag45'>8. Signature</h2>
        <div>
          <label className='ardata45'>Signature of the Person Responsible for the Database</label>
          <input className= 'inputf45'
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={(e) => setSignature(e.target.files[0])}
          />
        </div>
      </div>
      <div>
        <h2 className='artag45'>9. Recommendations and Follow-up</h2>
        <div>
          <label className='ardata45'>Recommendations for Shelter Improvements</label>
          <textarea className='inputt45'
            rows="4"
            cols="50"
            value={recommendations}
            onChange={(e) => setRecommendations(e.target.value)}
          />
        </div>
      </div>
      <Link to="/Agencymain">
      <button className='arsave34'onClick={arhandleSubmit54}>Save </button>
              </Link>
  
     
     
    </div>
    </div>
  );
}

export default AgencyRecord;

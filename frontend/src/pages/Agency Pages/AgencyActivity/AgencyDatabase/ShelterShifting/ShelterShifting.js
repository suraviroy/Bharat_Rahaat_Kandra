import React, { useState } from 'react';
import './ShelterShifting.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function ShelterShifting() {
  const [members, setMembers] = useState([]);
  const [namem, setName] = useState('');
  const [role, setRole] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [shift, setShift] = useState('Full-Time');
  const [data, setData] = React.useState(localStorage.getItem('id'));

  const handleAddMember = () => {
    if (namem && role && contactInfo) {
      setMembers([...members, { namem, role, contactInfo, shift }]);
      
      setName('');
      setRole('');
      setContactInfo('');
      setShift('Full-Time');
    } else {
      alert('Please fill out all fields.');
    }
  };
  React.useEffect(() => {
    console.log("storU " + data);
  }, [data])

  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
   
    setName('');
    setRole('');
    setContactInfo('');
    setShift('Full-Time');
  };
  const handleSave21 = async (event) => {

    event.preventDefault();
    const response = await fetch('http://localhost:8080/userRouter/database2', {
      method: 'POST',
      body: JSON.stringify({ data ,members,namem,role,shift}),
      // body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data1 = await response.json();
    console.log(data1);
    //console.log(formData);
    Navigate("/AgencyRecordMain")
    //handleSave211();
    // alert(data1.message);
  };
  return (
    <div className='body90'>
      <div className='title90'>
      <h1 className='sshead34'>Shelter Staffing</h1>
      <form className = 'ssform34' onSubmit={handleSubmit}>
        <div className='records67'>
          <h2 className='sstitle345'>5. Add Shelter Staff Member</h2>
          <div className='role34'>
            <label className='details23'>Name:</label>
            <input className = 'ssinput34' type="text" value={namem} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className='details23'>Roles and Responsibility:</label>
            <input className = 'ssinput345' type="text" value={role} onChange={(e) => setRole(e.target.value)} />
          </div>
          <div>
            <label className='details23'>Contact Information:</label>
            <input  className = 'ssinput3456' type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
          </div>
          <div>
            <label className='details23'>Shifting Schedule:</label>
            <select  className="sel3456" value={shift} onChange={(e) => setShift(e.target.value)}>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>
          <button className='ssmember34' onClick={handleAddMember}>Add Member</button>
          <div>
          <Link to="/AgencyRecordMain">
          <button  type="submit" onClick={handleSave21} className='sssubmit34'>Submit and Next</button>
     </Link>
          
          </div>
         
          
         
        </div>
      </form>
      <div>
        <h2 className='sshead34'>Shelter Staff Members</h2>
        <ul className='sslist56'>
          {members.map((member, index) => (
            <li className = 'sslist34'key={index}>
              <strong>Name:</strong> {member.namem}
              <br />
              <strong>Roles and Responsibility:</strong> {member.role}
              <br />
              <strong>Contact Information:</strong> {member.contactInfo}
              <br />
              <strong>Shifting Schedule:</strong> {member.shift}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default ShelterShifting;

import React, {useEffect, useState } from 'react';
import "./basicform.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BasicInfoForm = () => {
  // const [patientSLNo, setPatientSLNo] = useState('');
  // const [typee, settypee] = useState('new');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [imageC, setImageC] = useState('');
  const [imageP, setImageP] = useState('');
  // const [gender, setGender] = useState('');
  const [nagency, setNagency] = useState('');
  // const [bloodGroup, setBloodGroup] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pin, setPin] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianRelation, setGuardianRelation] = useState('');
  // const [guardianAddress, setGuardianAddress] = useState('');
  // const [guardianPhoneNumber, setGuardianPhoneNumber] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [uname, setUname] = useState('');
  const [passs, setPasss] = useState('');
  const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [statuss, setStatuss] = useState('Pending');
 

  // const generatePatientSLNo = () => {
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  //   let result = '';
  //   for (let i = 0; i < 6; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * characters.length));
  //   }
  //   setPatientSLNo(result);
  // };

  const Navigate = useNavigate();


  // function passwordd(event) {
  //   event.preventDefault();
  //   const userr = "gov";
  //   const pass = "pass";
  //   const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
  //   const randomNumber1 = Math.floor(10000000 + Math.random() * 90000000);

  //   setUname(`${userr}${randomNumber}`);
  //   setPasss(`${pass}${randomNumber1}`);
    
  //   console.log(JSON.stringify({uname, passs}));
  // }
 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((postion) => {
        setLat(postion.coords.latitude)
        setLon(postion.coords.longitude)
        //console.log(lat, lon)
    })
}, [lat, lon])

  const handleSubmit = async (event) => {
    event.preventDefault();
    // toast("Form Submited!");
    const userr = "gov";
    const pass = "pass";
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
    const randomNumber1 = Math.floor(10000000 + Math.random() * 90000000);

    // setUname(`${userr}${randomNumber}`);
    // setPasss(`${pass}${randomNumber1}`);
    var storU=userr+randomNumber;
    var storP=pass+randomNumber1;
    setUname(storU);
    setPasss(storP);
    // console.log(JSON.stringify({doctorName,name,contactNumber,email,nagency,idNumber,aadharNumber,pin,address,guardianName,
    //   guardianRelation,storU,storP,lat,lon,imageC,imageP}))

    // const response = await axios.post('http://localhost:8080/userRouter/appointment', {
    //     method: 'POST',
    //     body: JSON.stringify({name,contactNumber,time,dob,gender,address}),
    //     // body: JSON.stringify(form),
    //     headers: {
    //         'Content-Type': 'application/json'
    //      }
    // })

        const {data} = await axios.post('http://localhost:8080/userRouter/registration', {
          doctorName:doctorName,
          name:name,
          contactNumber:contactNumber, email: email, nagency:nagency,idNumber:idNumber,aadharNumber:aadharNumber,
          pin:pin,address:address,guardianName:guardianName, guardianRelation: guardianRelation,state:state,
          storU:storU, storP:storP, lat: lat, lon: lon, imageC:imageC, imageP:imageP,statuss:statuss
          
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  
    // const data = await response.json();
    console.log(data);
    Navigate("/");
    //toast("Form Submitted")
  };

  // function submitform(){
  //   passwordd();
  //   handleSubmit();
  // }
  const [error, setError] = useState('');

  // const desiredLength = 10; 
  // const handleContactNumberChange = (e) => {
  //   const inputValue = e.target.value;

  //   if (inputValue.length === desiredLength ) {
  //     setContactNumber(inputValue);
  //     setError('');
  //   } else {
  //     setError(`Mobile number must be ${desiredLength} digits.`);
  //   }
  // };

  function converttobase64Cer(e){
    
    var reader= new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      console.log(reader.result);
      setImageC(reader.result);
    };
    reader.onerror= error =>{
      console.log(error);
    };
  }
  function converttobase64Pic(e){
    var reader= new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      console.log(reader.result);
      setImageP(reader.result);
    };
    reader.onerror= error =>{
      console.log(error);
    };
  }

  return (
    <div className="basic-info-form">
      <h2>AGENCY INFORMATION</h2>
      <form onSubmit={handleSubmit}>
        <section className="doctor-section">
          <h3>What service you provide? </h3>
          <label>Select the type below :</label>
          <select value={doctorName}  onChange={(e) => setDoctorName(e.target.value)}>
            <option >Select</option>
            <option value="Rescue Service">Rescue Agency</option>
            <option value="Medical Service">Medical Service</option>
            <option value="Fire Service">Fire Service</option>
            <option value="Water rescue Service">Water rescue Service</option>
            <option value="News Channel">News Channel</option>
            <option value="Police Station">Police Station</option>

          </select>

        </section>
        <section className="identification-section">
          <h3>Chief Executive Officer </h3>
          {/* <div>
            <label>Patient SL No:</label>
            <div>
              <span>{patientSLNo}</span>
              <button type="button" onClick={generatePatientSLNo}>Generate</button>
            </div>
          </div> */}
          <div>
            <label>Name:</label>
            <input  type="text" required value={name} onChange={(e) => setName(e.target.value)} />
            <label>Contact Number:</label>
            <input type="text" required value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
              {/* <input type="text" value={contactNumber} onChange={handleContactNumberChange} />
              {error && <div style={{ color: 'red' }}>{error}</div>} */}
            <label>Email:</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

          </div>
          {/* <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          <label>Date of visit:</label>
          <input required type="date" value={dov} onChange={(e) => setDOV(e.target.value)} />
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
            <option value="thirdgender">Thirdgender</option>


          </select>
        
          </div> */}
          <div>
            <label>Name of Agency :</label>
            <input type="text" required value={nagency} onChange={(e) => setNagency(e.target.value)} />
            {/* <label>Blood Group:</label>
          <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
         
          </select> */}
            <label>Agency ID Number:</label>
            <input type="text" required value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
            <label>Aadhar Number:</label>
            <input type="text" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} />
          </div>

        </section>

        <section className="address-section">
          <h3>Address</h3>
          <div>
            <label>Address:</label>
            <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} />
            <label>PIN:</label>
            <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} />
          </div>
          <div>
            <label>State:</label>
            <input type="text" required value={state} onChange={(e) => setState(e.target.value)} />
            <label>Country:</label>
            <input type="text" required value={country} onChange={(e) => setCountry(e.target.value)} />
          </div>

        </section>

        <section className="others-section">
          <h3>Case History</h3>
          <div>
            <label>Record Number 1 :</label>
            <input type="text" required value={guardianName} onChange={(e) => setGuardianName(e.target.value)} />
            <label>Record Number 2 :</label>
            <input type="text" required value={guardianRelation} onChange={(e) => setGuardianRelation(e.target.value)} />
          </div>
          {/* <div>
          <label>Guardian Address:</label>
          <input type="text" value={guardianAddress} onChange={(e) => setGuardianAddress(e.target.value)} />
          <label>Guardian Phone Number:</label>
          <input type="text" value={guardianPhoneNumber} onChange={(e) => setGuardianPhoneNumber(e.target.value)} />
          </div> */}

        </section>

        <section className="address-section">
          <h3>Supporting Documents</h3>
          <div>
            <div className="file-upload-container">
              <label className='file34'>Submit Government certificate:</label>
              <input type="file" onChange={converttobase64Cer} />
            </div>
            <div className="file-upload-container">
              <label className='file34'>Submit Your Picture:</label>
              <input type="file"  onChange={converttobase64Pic} />
            </div>
          </div>

        </section>
        {/* <div className='submit34'> */}
        <button className='submit34'  >Submit</button>
        {/* </div> */}


      </form>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default BasicInfoForm;

import React, { useState } from 'react';
import './MissingForm.css';
import axios from 'axios';
const dummyImage ='https://i.pinimg.com/736x/87/14/55/8714556a52021ba3a55c8e7a3547d28c.jpg';

const MissingForm = () => {
  const [image, setPhoto] = useState(dummyImage);
  const [name, setName] = useState('');
  const [adharNumber, setAadhar] = useState('');
  const [phNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nameError, setNameError] = useState(false);
  const [aadharError, setAadharError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        
      };
      reader.readAsDataURL(file);
    }
  };
  //console.log(image)

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      isValid = false;
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!adharNumber || !/^\d{12}$/.test(adharNumber)) {
      isValid = false;
      setAadharError(true);
    } else {
      setAadharError(false);
    }

    if (!phNumber || !/^\+91\d{10}$/.test(phNumber)) {
      isValid = false;
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      isValid = false;
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    return isValid;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
        const {data}  = await axios.post('http://localhost:8080/victimRouter/missingpeople', {
        name:name,
          image:image,
          adharNumber:adharNumber, email: email, phNumber:phNumber,address:address,age:age,
          gender:gender,category:"Missing"
          
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    // const data1 = await response.json();
    // console.log(data1);
    console.log(data);}
    // Navigate("/");
    //toast("Form Submitted")
  };

  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (validateForm()) {
  //     console.log({
  //       image,
  //       name,
  //       adharNumber,
  //       phNumber,
  //       email,
  //       address,
  //       age,
  //       gender,
  //     });

  //     setPhoto(dummyImage);

  //     setName('');
  //     setAadhar('');
  //     setPhone('');
  //     setEmail('');
  //     setAddress('');
  //     setAge('');
  //     setGender('');
  //   }
  // };

  return (
    <div className="form-container041">
    <div className="photo-section041">
      <label htmlFor="photo-upload" className="photo-upload-label041">
        <img
          src={image}
          alt="Selected"
          className="selected-photo041"
        />
        <input className='file-label041'
          type="file"
          id="photo-upload"
          accept="image/*"
          onChange={handlePhotoUpload}
        />
      </label>
    </div>
      <div className="form-section041">
        <h2 className='form-head041'>Register Missing Person</h2>
        <form >
          <div className={`form-field041 ${nameError ? 'error' : ''}`}>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span className="error-message041">Name can't be blank</span>}
          </div>

          <div className={`form-field041 ${aadharError ? 'error' : ''}`}>
            <label htmlFor="aadhar">Aadhar Number*</label>
            <input
              type="text"
              id="aadhar"
              value={adharNumber}
              onChange={(e) => setAadhar(e.target.value)}
            />
            {aadharError && (
              <span className="error-message041">Please give a valid Aadhar card number</span>
            )}
          </div>

          <div className={`form-field041 ${phoneError ? 'error' : ''}`}>
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="text"
              id="phone"
              value={phNumber}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && (
              <span className="error-message041">
                {phNumber ? 'Please give a valid phone number' : 'Phone number can\'t be blank'}
              </span>
            )}
          </div>

          <div className={`form-field041 ${emailError ? 'error' : ''}`}>
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="error-message041">Please give a valid email</span>}
          </div>

          <div className="form-field041">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-field041">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-field041">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button className='save041' type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MissingForm;
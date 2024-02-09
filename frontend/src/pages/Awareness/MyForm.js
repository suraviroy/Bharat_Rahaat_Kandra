import React from 'react';
import './MyForm.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
  // Define state variables for form fields
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [phno, setNumber] = React.useState('');
  const [courseSelected, setCourseSelected] = React.useState('Earthquake');
  const Navigate = useNavigate();

  // Add more state variables for other details

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    Navigate("/Earthquake");
    // You can add logic to send form data to a backend or perform other actions
  };

  return (
    <div className="form-container1234">
      <div className="picture-section1234">
        {/* Replace 'imageUrl' with your image URL */}
        <img src="https://zhl.org.in/blog/wp-content/uploads/2023/09/Natural-Disasters.jpg" alt="Profile" className="profile-picture1234" />
      </div>
      <div className="details-section1234">
        <h2>Enter Details</h2>
        <form>
          <div className="form-group1234">
            <label className='label765' htmlFor="name">Name:</label>
            <input className='input890'
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group1234">
            <label className='label765' htmlFor="age">Age:</label>
            <input className='input890'
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group1234">
            <label className='label765' htmlFor="phno">Phone Number:</label>
            <input className='input890'
              type="number"
              id="phno"
              value={phno}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group1234">
            <label className='label765' htmlFor="email">Email:</label>
            <input className='input890'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group1234">
           <label htmlFor="courseSelected" className='label765'>
             {('Course Selected:')}
           </label>
           <select
            id="courseSelected"
            className="form-input"
            value={courseSelected}
            onChange={(e) => setCourseSelected(e.target.value)}
          >
            <option value="Earthquake">{('Earthquake')}</option>
            <option value="Flood">{('Flood')}</option>
            <option value="Landslide">{('Landslide')}</option>
            <option value="Drought">{('Drought')}</option>
            
          </select>
        </div>
          {/* Add more form fields for other details */}
          <a href='/Earthquake'>
         <button type="button" className="button13" onClick={handleSubmit}>
           {('Submit')}
         </button>
        </a>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
// import React from 'react';
// import './MyForm.css'; // Import CSS file for styling
// import { useNavigate } from 'react-router-dom';

// const MyForm = () => {
//   // Define state variables for form fields
//   const [name, setName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [age, setAge] = React.useState('');
//   const [phno, setNumber] = React.useState('');
//   const [courseSelected, setCourseSelected] = React.useState('Earthquake');
//   const Navigate = useNavigate();

//   // Add more state variables for other details

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted');
//     Navigate("/Earthquake");
//     // You can add logic to send form data to a backend or perform other actions
//   };

//   return (
//     <div className="form-container1234">
//       <div className="picture-section1234">
//         {/* Replace 'imageUrl' with your image URL */}
//         <img src="https://zhl.org.in/blog/wp-content/uploads/2023/09/Natural-Disasters.jpg" alt="Profile" className="profile-picture1234" />
//       </div>
//       <div className="details-section1234">
//         <h2>Enter Details</h2>
//         <form>
//           <div className="form-group1234">
//             <label className='label765' htmlFor="name">Name:</label>
//             <input className='input890'
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group1234">
//             <label className='label765' htmlFor="age">Age:</label>
//             <input className='input890'
//               type="number"
//               id="age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group1234">
//             <label className='label765' htmlFor="phno">Phone Number:</label>
//             <input className='input890'
//               type="number"
//               id="phno"
//               value={phno}
//               onChange={(e) => setNumber(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group1234">
//             <label className='label765' htmlFor="email">Email:</label>
//             <input className='input890'
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group1234">
//            <label htmlFor="courseSelected" className='label765'>
//              {('Course Selected:')}
//            </label>
//            <select
//             id="courseSelected"
//             className="form-input"
//             value={courseSelected}
//             onChange={(e) => setCourseSelected(e.target.value)}
//           >
//             <option value="Earthquake">{('Earthquake')}</option>
//             <option value="Flood">{('Flood')}</option>
//             <option value="Landslide">{('Landslide')}</option>
//             <option value="Drought">{('Drought')}</option>
            
//           </select>
//         </div>
//           {/* Add more form fields for other details */}
//           <a href='/Earthquake'>
//          <button type="button" className="button13" onClick={handleSubmit}>
//            {('Submit')}
//          </button>
//         </a>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MyForm;

import React, { useState } from 'react';
import './MyForm.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
import Languageoption from './language-dropdown';

const MyForm = () => {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phno, setNumber] = useState('');
  const [courseSelected, setCourseSelected] = useState('Earthquake');
  const [language, setLanguage] = useState('en');
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    Navigate('/Earthquake');
  };

  
  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="form-container1234">
      <div className="picture-section1234">
        <img src="https://zhl.org.in/blog/wp-content/uploads/2023/09/Natural-Disasters.jpg" alt="Profile" className="profile-picture1234" />
      </div>
      <div className="details-section1234" >
      <Languageoption onChange={handleChangeLanguage} />
        <h2 style={{marginTop: '1vh'}}>
          {language === 'en'
            ? 'Enter Details'
            : language === 'hi'
            ? 'विवरण दर्ज करें'
            : language === 'be'
            ? 'বিস্তারিত লিখুন'
            : 'Enter Details'}
        </h2>
        <form>
          <div className="form-group1234">
            <label className="label765" htmlFor="name">
              {language === 'en'
                ? 'Name:'
                : language === 'hi'
                ? 'नाम:'
                : language === 'be'
                ? 'নাম:'
                : 'Name:'}
            </label>
            <input
              className="input890"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group1234">
            <label className="label765" htmlFor="age">
              {language === 'en'
                ? 'Age:'
                : language === 'hi'
                ? 'आयु:'
                : language === 'be'
                ? 'বয়স:'
                : 'Age:'}
            </label>
            <input
              className="input890"
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group1234">
            <label className="label765" htmlFor="phno">
              {language === 'en'
                ? 'Phone Number:'
                : language === 'hi'
                ? 'फ़ोन नंबर:'
                : language === 'be'
                ? 'ফোন নম্বর:'
                : 'Phone Number:'}
            </label>
            <input
              className="input890"
              type="number"
              id="phno"
              value={phno}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group1234">
            <label className="label765" htmlFor="email">
              {language === 'en'
                ? 'Email:'
                : language === 'hi'
                ? 'ईमेल:'
                : language === 'be'
                ? 'ইমেল:'
                : 'Email:'}
            </label>
            <input
              className="input890"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group1234">
            <label htmlFor="courseSelected" className="label765">
              {language === 'en'
                ? 'Course Selected:'
                : language === 'hi'
                ? 'चयनित पाठ्यक्रम:'
                : language === 'be'
                ? 'নির্বাচিত কোর্স:'
                : 'Course Selected:'}
            </label>
            <select
              id="courseSelected"
              className="form-input"
              value={courseSelected}
              onChange={(e) => setCourseSelected(e.target.value)}
            >
              <option value="Earthquake">
                {language === 'en'
                  ? 'Earthquake'
                  : language === 'hi'
                  ? 'भूकंप'
                  : language === 'be'
                  ? 'ভূমিকম্প'
                  : 'Earthquake'}
              </option>
              <option value="Flood">
                {language === 'en'
                  ? 'Flood'
                  : language === 'hi'
                  ? 'बाढ़'
                  : language === 'be'
                  ? 'বন্যা'
                  : 'Flood'}
              </option>
              <option value="Landslide">
                {language === 'en'
                  ? 'Landslide'
                  : language === 'hi'
                  ? 'भूस्खलन'
                  : language === 'be'
                  ? 'ভূমিধস'
                  : 'Landslide'}
              </option>
              <option value="Drought">
                {language === 'en'
                  ? 'Drought'
                  : language === 'hi'
                  ? 'सूखा'
                  : language === 'be'
                  ? 'খরা'
                  : 'Drought'}
              </option>
            </select>
          </div>
          <button type="button" className="button13" onClick={handleSubmit}>
            {language === 'en'
              ? 'Submit'
              : language === 'hi'
              ? 'प्रस्तुत करें'
              : language === 'be'
              ? 'জমা দিন'
              : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;

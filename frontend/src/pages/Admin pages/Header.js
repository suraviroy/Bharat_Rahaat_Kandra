import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header-container77">
      <div className="logo77">
        {/* Government Logo */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/640px-Government_of_India_logo.svg.png" alt="Government Logo" />
      </div>
      <div className="title77">
        {/* <img className='img0045' src ="https://res.cloudinary.com/dosofpk8l/image/upload/v1694109434/brk_logo-removebg-preview_iavumf.png" /> */}
        <h1>Bharat Raahat Kendra</h1>
        {/* <h1>Bharat Suraksha Abhijan</h1> */}
      </div>
      <div className="personal-logo77">
        {/* Personal Logo */}
        <img className='img0045' src="https://res.cloudinary.com/dosofpk8l/image/upload/v1694109434/brk_logo-removebg-preview_iavumf.png" alt="Personal Logo" />
      </div>
    </header>
  );
};

export default Header;

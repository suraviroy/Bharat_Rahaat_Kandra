import React from 'react';
import './Navigation.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const Navigate = useNavigate();
  function backto(){
    Navigate("/1236547811")
  }
  return (
    <nav className="navigation-container79">
      <ul className="navigation-list79">
        <li><a href="/admin">Home</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
      <button className="logout-button79" onClick={backto}>Log out</button>
    </nav>
  );
};

export default Navigation;



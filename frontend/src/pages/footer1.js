import React from 'react';
import './footer1.css';
import { AiFillMobile } from 'react-icons/ai'; 
import { BsTelephoneFill } from 'react-icons/bs'; 
import { MdEmail } from 'react-icons/md'; 


const Footer1 = () => {
  return (
    <div className="footer12">
      <div className="secContainer1 container grid">
        <div className='motto'>
        <span className="mottoTitle"><h5><b>Bharat Rahat Kendra</b></h5></span>
        Saving lives and beyond.<br></br>
        We strive to protect and help people<br></br> in all circumstances.
        Let us join our<br></br> hands to help our nation.
        </div>

        <div className="footerLinks">
          <span className="linkTitle"><h5><b>Helpful Links</b></h5></span>
          <li>
            <a href="#" className="linkTitle10">Home</a>
          </li>
          <li>
            <a href="#" className="linkTitle10">About Us</a>
          </li>
          <li>
            <a href="#" className="linkTitle10">Notification</a>
          </li>
          <li>
            <a href="#" className="linkTitle10">Services</a>
          </li>
        </div>

        <div className="footerLinks">
            <span className="linkTitle"><h5><b>Contact Us</b></h5></span>
            <div className="contactInfo">
                <div className="contactItem">
                    <AiFillMobile className="icon" />
                    <span className="Phone_Number1">+91 8935234633</span>
                </div>
                <div className="contactItem">
                    <BsTelephoneFill className="icon" />
                    <span className="Phone_Number2">+033 98432455</span>
                </div>
                <div className="contactItem">
                    <MdEmail className="icon" />
                    <span className="Email_id">brkendra@yahoo.com</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Footer1;
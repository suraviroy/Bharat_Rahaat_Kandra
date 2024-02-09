import React from 'react';
import { BsDisc, BsTriangleFill } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import './footer2.css';
import img2 from '../images/brk-logo.png'

const Footer2 = () => {
    return (
        <div className="logoDiv12" width='5'>
            <div className='brt-logos'>
                <a href=''><img  className='footer65'
                src="https://res.cloudinary.com/dosofpk8l/image/upload/v1694109434/brk_logo-removebg-preview_iavumf.png"
                alt="Bharat Rahat Kendra" style={ {width: "100px",height: "120px"}} /></a>
            </div>
            <div className='tag10'>
                <h4>
                    Bharat Raahat Kendra
                </h4>
            </div>

          <div className="Social">
            <ImFacebook className="icon" /> 
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
        </div>
    )
}
export default Footer2;
import React from 'react';
import './navbars.css';
import img1 from '../images/mnlogo.png'
import img2 from '../images/brk-logo.png'
import img3 from '../images/swach-bharat.png'
import img4 from '../images/AKAM_logo.jpg'
import img5 from '../images/G20New.jpg'
import img6 from '../images/Yoga_India_new.jpg'


const Navbars = () => {
   const handleClick = () => {
    console.log('Notification receivedddddd:');
    console.log('Notification receivedddddd:');
    fetch('http://127.0.0.1:5000/face-recognition')
    .then(response => response.json())
    .then(data => {
      console.log('Notification triggeredddd:', data.message);
    })
    .catch(error => {
      console.error('Error triggering notification:', error);
    });
    };
    return (
       <section className='navBarSections'>
        <div className='headers'>
            <div className='rows' >
                <div className='logos'>
                <img src={img1} className = "img-responsive1" alt="ministry" style={ {width: "220px",height: "100px"}} />
           </div>
           <div className='brt-logos'>
         <img src="https://res.cloudinary.com/dosofpk8l/image/upload/v1694109434/brk_logo-removebg-preview_iavumf.png" className = "img-responsive6"
         alt="Bharat Rahat Kendra" style={ {width: "150px",height: "100px"}} />
         </div>
         <div className='tag10s'>
            <h2><b className='tags121'>
                Bharat Raahat Kendra
            </b></h2>
            {/* <h2><b className='tags121'>
            Bharat Suraksha Abhijan
            </b></h2> */}
         </div>
        <div className='swach-bharats'>
        <img src={img3} className = "img-responsive2" alt="swach-bharat" style={ {width: "150px",height: "100px"}} />
        </div>
        <div className='akams'>
        <img src={img4} className = "img-responsive3" alt="AKAM" style={ {width: "100px",height: "100px"}} />
        </div>
        <div className='G20s'>
        <img src={img5} className = "img-responsive4" alt="G20" style={ {width: "100px",height: "100px"}} />
        </div>
        <div className='Yogas'>
        <img src={img6} className = "img-responsive5" alt="Yoga" style={ {width: "100px",height: "100px"}} />
        </div>
        
            </div>
        </div>
        <div className='navBars'>
            <div className='navLists flex'>

                <div className='navItem1'>
                    <a href='/' className='navLink' >Home</a>
                </div>
                <div className='navItem2'>
                    <a href='#' className='navLink' onClick={handleClick}>About Us</a>
                </div>
                <div className='navItem3'>
                    <a href='/UserPlatform' className='navLink'>Awareness</a>
                </div>
                <div  className='navItem4'>
                    <a href='#' className='navLink'>Notifications</a>
                </div>
                <div  className='navItem5'>
                    <a href='/Feedpage' className='navLink'>Feed Page</a>
                </div>

                <div className='headerBtns3 flex'>
                    <button className='btn loginBtn3'>
                        <a href='/1236547811'className='but1010' >Administrator</a>
                    </button>
                </div>
                <div className='headerBtns1 flex'>
                    <button className='btn loginBtn1'>
                        <a href='/BasicInfoForm'className='but1010' >Register</a>
                    </button>
                </div>
                <div className='headerBtns2 flex'>
                    <button className='btn loginBtn2' >
                        <a href='/Login' className='but1010'>Login</a>
                    </button>
                </div>
            </div>
        </div>
       </section>
       
    )
}
export default Navbars
import React, {useEffect} from 'react';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import './body.css';
import AOS from'aos';
import 'aos/dist/aos.css';

export default function App() {
    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);
  return (
    <div className='animation2' data-aos='zoom-in'>
        <MDBCard>
      <MDBCardBody className='body12'><h2><b>WELCOME TO BHARAT RAAHAT KENDRA</b></h2>
      
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}
import React from "react";
// import MapComponent from "./pages/tt";
//import Booking1 from "./pages/booking1";
import Tracking from "./pages/tracking";
import BasicInfoForm from "./pages/basicform";
import Login from "./pages/login";
import Body from './pages/body'
import Case from './pages/case'
import Footer1 from './pages/footer1'
import Footer2 from './pages/footer2'
import Lightbox from './pages/lightbox'
import Headerr from "./pages/headerr";
import Navbars from "./pages/navbars";
function Homepage() {
    return (
      <div className="hh1">
      <div classname="hh3">  <Navbars /></div>
      <div classname="hh3">  <Headerr /></div>
      <br></br>
      <br></br>
      <div classname="hh3">  <Body /></div>
      <div classname="hh3">  <Case /></div>
      <div classname="hh3">  <Lightbox /></div>
      <div classname="hh3">  <Footer1 /></div>
      <div classname="hh3">  <Footer2 /></div>
    </div>
        

    );
}
export default Homepage;
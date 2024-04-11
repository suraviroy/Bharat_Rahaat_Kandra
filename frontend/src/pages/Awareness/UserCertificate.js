// import React, { Component } from "react";
// import { exportComponentAsPNG } from "react-component-export-image";
// import './UserCertificate.css';

// class UserCertificate extends Component {
//   certificateWrapper = React.createRef();
//   state = {
//     Name: ""
//   };

//   render() {
//     return (
//       <div className="App12345">
//         <div className="Meta23456">
//           <h1 className="h895634">Completion Certificate</h1>
//           <p className="p567834">Please enter your name.</p>
//           <input className="in560943"
//             type="text"
//             placeholder="Please enter your name..."
//             value={this.state.Name}
//             onChange={(e) => {
//               this.setState({ Name: e.target.value });
//             }}
//           />
//           <button className="btn560934"
//             onClick={(e) => {
//               e.preventDefault();
//               exportComponentAsPNG(this.certificateWrapper, {
//                 html2CanvasOptions: { backgroundColor: null }
//               });
//             }}
//           >
//             Download
//           </button>
//         </div>

//         <div className = "pl675423" id="downloadWrapper" ref={this.certificateWrapper}>
//           <div className= "pac456789" id="certificateWrapper">
//             <p className="pn897656">{this.state.Name}</p>
//             <img className="im908756" src="https://i.imgur.com/5UkEYbG.png" alt="Certificate" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default UserCertificate;
import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import './UserCertificate.css';
import Languageoption from './language-dropdown';

class UserCertificate extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "",
    language: "en" // Default language is English
  };

  handleChangeLanguage = (e) => {
    this.setState({ language: e.target.value });
  };

  render() {
    const { Name, language } = this.state;

    return (
      <div className="App12345">
        <div className="Meta23456">
        <Languageoption onChange={this.handleChangeLanguage} />
          <h1 className="h895634">
            {language === "en"
              ? "Completion Certificate"
              : language === "hi"
              ? "पूर्णता प्रमाणपत्र"
              : language === "be"
              ? "সমাপ্তি সার্টিফিকেট"
              : "Completion Certificate"}
          </h1>
          <p className="p567834">
            {language === "en"
              ? "Please enter your name."
              : language === "hi"
              ? "कृपया अपना नाम दर्ज करें।"
              : language === "be"
              ? "আপনার নাম লিখুন।"
              : "Please enter your name."}
          </p>
          <input
            className="in560943"
            type="text"
            placeholder={
              language === "en"
                ? "Please enter your name..."
                : language === "hi"
                ? "कृपया अपना नाम दर्ज करें..."
                : language === "be"
                ? "আপনার নাম লিখুন ..."
                : "Please enter your name..."
            }
            value={Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
          <button
            className="btn560934"
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            {language === "en"
              ? "Download"
              : language === "hi"
              ? "डाउनलोड करें"
              : language === "be"
              ? "ডাউনলোড"
              : "Download"}
          </button>
        </div>

        <div className="pl675423" id="downloadWrapper" ref={this.certificateWrapper}>
          <div className="pac456789" id="certificateWrapper">
            <p className="pn897656">{Name}</p>
            <img
              className="im908756"
              src="https://i.imgur.com/5UkEYbG.png"
              alt="Certificate"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserCertificate;


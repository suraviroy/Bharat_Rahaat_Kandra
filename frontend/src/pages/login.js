import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';
function Login() {
    const [storU, setUsername] = useState("");
    const [storP, setPassword] = useState("");
    const Navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
    
        console.log(storU, storP);
        fetch("http://localhost:8080/userRouter/login", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            storU, 
            storP
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.error === "User Not found") {
                alert("Invalid User ID");
              }
             else if (data.error === "Invalid Password") {
                alert("wrong Password");
              }
            else if (data.status === "ok") {
              alert("login successful");
              window.localStorage.setItem("token", data.data);
            //  window.localStorage.setItem("id",data.data.storU);
              Navigate("/Agencymain");
              
            //   window.localStorage.setItem("loggedIn", true);
    
            //   window.location.href = "./userDetails";
            }
          });
      }
    

    return (
        <div className="container1001" >
            <h1 className="heading1001">Log in Form</h1>
            <div className="form_container1001">
                <div className="left1001">
                    <img className="img1001" src="https://res.cloudinary.com/dosofpk8l/image/upload/v1694109626/brk_logo_dotpbx.png"  alt="login" />
                </div>
                {/* <div className="left1001">
                    <img className="img1001" src="https://res.cloudinary.com/dawra1qcb/image/upload/v1697809509/WhatsApp_Image_2023-10-14_at_20.46.23-removebg-preview_gzycof.png"  alt="login" />
                </div> */}
                <div className="right1001">
                    <h2 className="from_heading1001">Members Log in</h2>
                    <input type="text"
                        className="input1001"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username" />
                    <input type="password"
                        className="input1001"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                    <button className="btn1001" onClick={handleSubmit}>Log In</button>
                    <p className="text1001">or</p>
                    {/* <button className="google_btn1001" >
						<img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="google icon" />
						<span>Sign in with Google</span>
					</button> */}
                    <p className="text1001">
                        New Here ? <Link to="/signup">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
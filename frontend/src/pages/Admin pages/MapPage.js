import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './MapPage.css';
import { Icon } from "leaflet";
import L from 'leaflet';
import Header from "./Header";
import Navigation from "./Navigation";
import SidePanel from "./SidePanel";
import Button from 'react-bootstrap/Button';
import MapPagePopup from "./mapPagePopup";
import MapPageAlert from "./mapPageAlert";

export default function MapPage() {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [details, setDetails] = useState(null);
    const [users, setUsers] = useState([]);
    const [users1, setUsers1] = useState([]);
   // const [showSecondPopup, setShowSecondPopup] = useState(false);
    const [isOpenArray, setIsOpenArray] = useState([]);
    const [isOpenArray1, setIsOpenArray1] = useState([]);

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
        iconSize: [38, 38]
    });
    const customIcon1 = new Icon({
        iconUrl: "https://res.cloudinary.com/dosofpk8l/image/upload/v1693924238/360_F_348764535_nW3oqOXoiVNsLTEJR4GWpIOWAeT7jkFM-removebg-preview_t8kmdw.png",
        iconSize: [65, 65]
    });
    const getUsers = async () => {
        const response = await fetch('http://localhost:8080/userRouter/MapAdmin', {
            method: 'GET',
        })
        const data = await response.json();
        setUsers(data.data);
        setIsOpenArray(Array(data.data.length).fill(false));
    }

    React.useEffect(() => {
        getUsers();

    }, [])
    const getUsersA = async () => {
        const response = await fetch('http://localhost:8080/alertRouter/MapAlert', {
            method: 'GET',
        })
        const data = await response.json();
        setUsers1(data.data);
        setIsOpenArray1(Array(data.data.length).fill(false));
    }

    React.useEffect(() => {
        getUsersA();

    }, [])
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         setLat(position.coords.latitude);
    //         setLon(position.coords.longitude);
    //     });
    // }, []);

    // Uncomment and modify this function as needed
    // const getUserGeolocationDetails = () => {
    //     fetch("https://geolocation-db.com/json/e5e47150-bc2c-11ed-9b49-492949f4ff3d")
    //         .then(response => response.json())
    //         .then(data => setDetails(data))
    //         .catch(error => console.error(error));
    // };

    // const markers = [

    //     {
    //         geocode: [lat, lon],
    //         popup: "Parthib Das"
    //     }
    // ];

    // const handleInitialPopupClick = () => {
    //     setShowSecondPopup(true);
    // };


    return (
        <div>
            {/* <Header />
            <Navigation /> */}
            <MapContainer center={[22.5726, 88.3639]} zoom={10}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {users.map((user, index) => (
                    <Marker position={[user.lat, user.lon]} icon={customIcon} className="alert-marker" key={user.popup}>
                        <Popup open={isOpenArray[index]} >
                            {user.nagency} 
                            <button className="trbtn01" onClick={() => setIsOpenArray(prev => prev.map((val, i) => i === index ? !val : val))}>
                                More Info
                            </button>
                            <MapPagePopup isOpen={isOpenArray[index]} onClose={() => setIsOpenArray(prev => prev.map((val, i) => i === index ? !val : val))} agencyname={user.nagency}
                                contactNumber={user.contactNumber} email={user.email} address={user.address}
                                pin={user.pin} state={user.state} />
                        </Popup>
                        
                    </Marker>
                ))
                }
                {users1.map((user1,index) => (
                    <Circle
                        center={[user1.latalert, user1.lonalert]}
                        radius={700}
                        color="red"
                        fillColor="red"
                        fillOpacity={0.3}
                        className="circle-pulse81"
                   
                    ><Popup>
                    Sender: {user1.alertsender}
                    <button className="trbtn01" onClick={() => setIsOpenArray1(prev => prev.map((val, i) => i === index ? !val : val))}>
                         More Info
                     </button>
                     <MapPageAlert isOpen={isOpenArray1[index]} onClose={() => setIsOpenArray1(prev => prev.map((val, i) => i === index ? !val : val))} agencyname={user1.alertsender}
                         contactNumber={user1.contactNumber} email={user1.email} address={user1.address}
                         />
                 </Popup></Circle>
                    ))}
                {users1.map((user1,index) => (
                    <Marker

                        position={[user1.latalert, user1.lonalert]}
                        icon={customIcon1}
                        key={user1.popup}
                    
                    >
                        
                    </Marker>
                ))}

            </MapContainer>
            {/* <SidePanel /> */}
        </div>
    )
}
// zIndexOffset={1000} // Ensure the marker (image) is above the Circle
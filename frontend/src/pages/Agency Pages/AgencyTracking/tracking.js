
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './tracking1.css';
import { Icon } from "leaflet";
import L from 'leaflet';
import AgencyDetailsPopup from "./AgencyDetailsPopup";
import AgencyDetailAlert from "./AgencyDetailsAlert";
// import Link from "cdbreact/dist/components/Link";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { toast } from 'react-toastify'; // For showing accident notifications
import 'react-toastify/dist/ReactToastify.css';


// Initialize Firebase if not already initialized
const firebaseConfig = {
    apiKey: "AIzaSyBdiqF2sQcIdnAFMyPKXSfTO_5Afrov944",
    authDomain: "alerttrace-eb050.firebaseapp.com",
    databaseURL: "https://alerttrace-eb050-default-rtdb.firebaseio.com",
    projectId: "alerttrace-eb050",
    storageBucket: "alerttrace-eb050.appspot.com",
    messagingSenderId: "737022141711",
    appId: "1:737022141711:web:c5c36f21d9f12c72e9ca7a",
    measurementId: "G-K5H8F38LMZ"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default function Tracking() {


    const locationLad = [
        {
            name: "Ruby General Hospital",
            latitude: 22.579720,
            longitude: 88.414951
        },
        {
            name: "AMRI Hospital",
            latitude: 22.597711,
            longitude: 88.422130
        },
        {
            name: "Apollo Gleneagles Hospital",
            latitude: 22.633877,
            longitude: 88.419007
        },
        {
            name: "Fortis Hospital",
            latitude: 22.585500,
            longitude: 88.405270
        },
        {
            name: "Manipal Hospital",
            latitude: 22.5575072,
            longitude: 88.376811
        },
        {
            name: "Institute of Pulmocare & Research",
            latitude: 22.5799504,
            longitude: 88.4748083
        }
    ];


    const [accidentMarkers, setAccidentMarkers] = useState([]);
    const [hasData, setHasData] = useState(false);
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    //const [mes, setmes] = useState('abce');
    const [details, setDetails] = useState(null);
    const [users, setUsers] = useState([]);
    const [users1, setUsers1] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [agency, setagency] = useState('');
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


    const customIconHospital = new Icon({
        iconUrl: "https://res.cloudinary.com/dosofpk8l/image/upload/v1745731130/image-removebg-preview_1_pyzyyl.png",
        iconSize: [35, 30]
    });

    React.useEffect(() => {
        getUsers();

    }, [])

    const getUsersA = async () => {
        try {
            const response = await fetch('http://localhost:8080/alertRouter/MapAlert', {
                method: 'GET',
            });
            const data = await response.json();

            const updatedUsers = (data.data || []).map(user => {
                const messageExists = user.message !== undefined && user.message !== null;
                const messsage = messageExists ? "vistic rescude" : "abc";

                return {
                    ...user,
                    mes: messsage
                };
            });

            setUsers1(updatedUsers);
            setIsOpenArray1(Array(updatedUsers.length).fill(false));

            // Check if there's any data and update the hasData state
            setHasData(updatedUsers.length > 0);
        } catch (error) {
            console.error("Error fetching users:", error);
            setHasData(false);
        }
    };


    React.useEffect(() => {
        getUsersA();

    }, [users1])



    // useEffect(() => {
    //     const database = firebase.database();
    //     const markersRef = database.ref("sensor_data");

    //     markersRef.on("value", (snapshot) => {
    //         const data = snapshot.val();
    //         if (data) {
    //             const newMarkers = Object.keys(data).map((key) => {
    //                 const latitude = parseFloat(data[key].Latitude);
    //                 const longitude = parseFloat(data[key].Longitude);
    //                 const magnitude = parseFloat(data[key].AccelerationMagnitude);
    //                 const temperature = parseFloat(data[key].Temperature);

    //                 // Check if message exists
    //                 const messageExists = data[key].message !== undefined && data[key].message !== null;
    //                 const message = messageExists ? "victim rescue" : "abc"; 

    //                 if (!isNaN(latitude) && !isNaN(longitude)) {
    //                     return {
    //                         latalert: latitude,         
    //                         lonalert: longitude,         
    //                         alertsender: `Accident Detected Device`, 
    //                         contactNumber: "",          
    //                         email: "",
    //                         address: "",
    //                         mes: message,
    //                         magnitude,
    //                         temperature
    //                     };
    //                 } else {
    //                     return null; // skip if invalid
    //                 }
    //             }).filter(marker => marker !== null);

    //             setUsers1(newMarkers); // Set users1 with the Firebase data
    //             setIsOpenArray1(Array(newMarkers.length).fill(false));
    //             setHasData(newMarkers.length > 0); 
    //         } else {
    //             setHasData(false); // No data case
    //         }
    //     });

    //     return () => {
    //         markersRef.off(); // Always clean up the listener
    //     };
    // },);



    return (
        <div className="map245">
            {/* <div className='ttttit'> <Navbarrecords /></div> */}
            <MapContainer center={[22.5726, 88.3639]} zoom={12} className="leaflet-container01">
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
                            <AgencyDetailsPopup isOpen={isOpenArray[index]} onClose={() => setIsOpenArray(prev => prev.map((val, i) => i === index ? !val : val))} agencyname={user.nagency}
                                contactNumber={user.contactNumber} email={user.email} address={user.address}
                                pin={user.pin} state={user.state} />
                        </Popup>

                    </Marker>

                ))}

                {users1.map((user1, index) => (
                    user1.mes !== "victim rescue" && (
                        <Circle
                            center={[user1.latalert, user1.lonalert]}
                            radius={700}
                            color="red"
                            fillColor="red"
                            fillOpacity={0.3}
                            className="circle-pulse81"
                        // Use the same customIcon for the Circle
                        // icon={customIcon1}
                        >
                            <Popup open={isOpenArray1[index]}>
                                Sender : {user1.alertsender}
                                <button className="trbtn01" onClick={() => setIsOpenArray1(prev => prev.map((val, i) => i === index ? !val : val))}>
                                    More Info
                                </button>
                                <AgencyDetailAlert isOpen={isOpenArray1[index]} onClose={() => setIsOpenArray1(prev => prev.map((val, i) => i === index ? !val : val))} agencyname={user1.alertsender}
                                    contactNumber={user1.contactNumber} email={user1.email} address={user1.address}
                                />
                            </Popup>
                        </Circle>)))}
                {users1.map((user1, index) => (
                    user1.mes !== "victim rescue" && (
                        <Marker

                            position={[user1.latalert, user1.lonalert]}
                            icon={customIcon1}
                            key={user1.popup}
                        // zIndexOffset={1000} // Ensure the marker (image) is above the Circle
                        >

                        </Marker>
                    )))}
                {hasData &&
                    locationLad.map((location, index) => (
                        <Marker
                            key={index}
                            position={[location.latitude, location.longitude]}
                            icon={customIconHospital}
                        >
                            <Popup>
                                <div>
                                    <strong>{location.name}</strong><br />
                                </div>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>

        </div>
    )
}




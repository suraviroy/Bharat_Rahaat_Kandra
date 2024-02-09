import React from "react";
import { MapContainer, TileLayer, Marker, Popup,Circle  } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import './tracking.css'
import { marker } from "leaflet";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import L from 'leaflet';
// import Navbarrecords from './nabarrecords';

export default function Tracking() {

    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [details, setDetails] = useState(null)

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
        iconSize: [38, 38]
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((postion) => {
            setLat(postion.coords.latitude)
            setLon(postion.coords.longitude)
            console.log(lat, lon)
        })
    }, [lat, lon])

    // const getUserGeolocationDetails=() =>{
    //     fetch("https://geolocation-db.com/json/e5e47150-bc2c-11ed-9b49-492949f4ff3d")
    //     .then( response => response.json())
    //     .then( data => setDetails(data));
    // }

    const markers = [
        {
            // geocode:[22.5597,88.3961],
            geocode: [lat, lon],
            //  geocode:[`${getUserGeolocationDetails.details.latitude},${getUserGeolocationDetails.details.longitude}`],
            popup: "Parthib Das"
        }
    ];


    const redAlertIcon = L.divIcon({
        className: 'red-alert-icon',
        iconSize: [32, 32], // Set the size of the icon
        html: '<div style="background-color: red; width: 100%; height: 100%;"></div>',
    });
    
return (
    <div>
        {/* <div className='ttttit'> <Navbarrecords /></div> */}
        <MapContainer center={[22.5726, 88.3639]} zoom={14}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                markers.map(marker => (
                    <Marker position={marker.geocode} icon={customIcon} className="alert-marker" >
                        <Popup>
                            {marker.popup}
                        </Popup>
                    </Marker>
                ))
            }
            <Circle
          center={[lat, lon]} // Set the center coordinates of the circle
          radius={200} // Set the radius of the circle in meters
          color="red" // Set the border color of the circle
          fillColor="red" // Set the fill color of the circle
          fillOpacity={0.3} 
          className="circle-pulse"// Set the opacity of the circle's fill color (0-1)
        />
        </MapContainer>
    </div>
)
}
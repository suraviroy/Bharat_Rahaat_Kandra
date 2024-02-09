import React, { useState } from 'react';
import { OutlinedInput } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// import { Drafts } from '@material-ui/icons';
import './SearchBox.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
    q: '',
    format: 'json',
    addressdetails: 'addressdetails'
};

export default function SearchBox(props) {
    const { selectPosition, setSelectPosition } = props;
    const [searchText, setSearchText] = useState("");
    const [listPlace, setListPlace] = useState([]);
    const [longitude, setLongitude] = useState('75.1652');
    const [latitude, setLatitude] = useState('39.9526');
    const [showAlert, setShowAlert] = useState(false);

    const handleFetchCoordinates = (item) => {
        const params = {
            q: item.display_name,
            format: 'json',
            addressdetails: 1,
            polygon_geojson: 0
        };
        const queryString = new URLSearchParams(params).toString();
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                if (data.length > 0) {
                    const { lat, lon } = data[0];
                    setLatitude(lat);
                    setLongitude(lon);
                    setShowAlert(true);
                }
            })
            .catch((err) => console.log("err: ", err));
    };


    const sendPosition = async (latalert, lonalert) => {
        console.log(latalert, lonalert);
        const { data } = await axios.post('http://localhost:8080/alertRouter/sendalert', {
            latalert: latitude,
            lonalert: longitude,
            time: new Date().toISOString(),
            alertsender: "Government",
            typeofrequest: "Emergency Alert",
            contactNumber : "03365442344",
            address : "322, Jessore Rd, International Airport, Motilal Colony",
            email : "government23@gmail.com"

        }, {
            // headers: {
            //   headers: { "Authorization": `Bearer ${data1  }` },
            // }
            headers: {
                'Content-Type': 'application/json',
                // "Authorization": `Bearer ${data1  }`,
            }
        }
        )

        // const data = await response.json();
        console.log(data);
        toast("Alert send!")
    }

    return (
        <div className='mpbox01'>
            <div className='mpbox02'>
                <div className='mpbox03'>
                    <OutlinedInput
                        className='mpbox04'
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                </div>
                <div className='mpbox05'>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            // Search
                            const params = {
                                q: searchText.toLowerCase(),
                                format: 'json',
                                addressdetails: 1,
                                polygon_geojson: 0
                            };
                            const queryString = new URLSearchParams(params).toString();
                            const requestOptions = {
                                method: "GET",
                                redirect: "follow"
                            };
                            fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                                .then((response) => response.text())
                                .then((result) => {
                                    console.log(JSON.parse(result));
                                    setListPlace(JSON.parse(result));
                                })
                                .catch((err) => console.log("err: ", err));
                        }}
                    >
                        Search
                    </Button>
                </div>
            </div>
            <div className='mpbox06'>
                <List component='nav' aria-label='main mailbox folders' className="mpbox101">
                    {listPlace.map((item) => {
                        return (
                            <div key={item?.osm_id}>
                                <ListItem
                                    button
                                    onClick={() => {
                                        setSelectPosition(item);
                                        handleFetchCoordinates(item);
                                    }}
                                >
                                    <ListItemIcon>
                                        <img
                                            src='https://cdn-icons-png.flaticon.com/512/2776/2776067.png'
                                            alt='Placeholder'
                                            style={{ width: 38, height: 38 }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={item?.display_name} />
                                </ListItem>
                                <Divider />
                            </div>
                        );
                    })}
                </List>
            </div>
            {/* {showAlert && (
                <div className='popup'>
                    Longitude: {longitude}, Latitude: {latitude}
                </div>
            )} */}
            <div className='mpbox07'> <Button onClick={() => {
                sendPosition({latitude}, {longitude})
            }} variant="contained"
                color="primary">Send Alert</Button></div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

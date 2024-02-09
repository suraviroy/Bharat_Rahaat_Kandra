import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import "./BookingSlots.css";
import { useNavigate } from 'react-router-dom';

export default function BookingSlots() {
    const [userData, setUserData] = useState({
        Name: "",
        PhoneNumber: "",
        location: "",
        Date1: "",
        Time1: "",
        Option: ""
    });
    const Navigate = useNavigate();
    const [selectedSlot, setSelectedSlot] = useState(null);

    const timeSlots = ["10:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"];

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Add logic to handle form submission here, including the selected time slot
    };

    const postUserData = (event) => {
        const date = event.target.name;
        const value = event.target.value;
        setUserData((prevData) => ({ ...prevData, [date]: value }));
    };
    const handleSubmittt = () => {
        Navigate("/UserPlatform")
    };
    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
        setUserData((prevData) => ({ ...prevData, Time1: slot }));
    };

    return (
        <div className="booking-container9800">
            <div className="register9800">
                <div className="form-container9800">
                    <div className="form-header9800">
                        <div className="form-title9800">Book Slots For Training</div>
                        <span className="get-service9800">Fill up the form to get the service</span>
                    </div>

                    <form className="booking-form219800" onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-section6529800">
                            <div className="input-group9800">
                                <div className="label9569800">Name of the Institution</div>
                                <input
                                    className="inputflied1459800"
                                    type="text"
                                    name="Name"
                                    {...register("Name")}
                                    placeholder="Name"
                                    value={userData.Name}
                                    onChange={postUserData}
                                />
                            </div>

                            <div className="input-group">
                                <div className="label956">Phone Number</div>
                                <input
                                    className="inputflied1459800"
                                    type="text"
                                    name="PhoneNumber"
                                    {...register("PhoneNumber")}
                                    placeholder="Phone Number"
                                    value={userData.PhoneNumber}
                                    onChange={postUserData}
                                />
                            </div>

                            <div className="input-group">
                                <div className="label956">Location</div>
                                <input
                                    className="inputflied1459800"
                                    type="text"
                                    name="location"
                                    {...register("location", { required: true, maxLength: 10 })}
                                    placeholder="Location"
                                    value={userData.location}
                                    onChange={postUserData}
                                />
                            </div>
                        </div>

                        <div className="date-section9800">
                            <Form.Label className="label9569800">Pick your date</Form.Label>
                            <input
                                type="date"
                                name="Date1"
                                {...register("Date1")}
                                value={userData.Date1}
                                onChange={postUserData}
                                className="pickdate345"
                            />
                        </div>
                        <div className="left2679800">
                        <div className="time-slot-container9800">
                            <div className="timeselect456">Select Time Slot</div>
                            <div className="time-slots9800">
                                {timeSlots.map((slot, index) => (
                                    <button
                                        key={index}
                                        className={`time-slot-button9800 ${selectedSlot === slot ? 'selected' : ''}`}
                                        onClick={() => handleSlotClick(slot)}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                            {selectedSlot && (
                                <p className="selected-slot9800">You have selected: {selectedSlot}</p>
                            )}
                        </div>
                        </div>
                      <button className="submit-button6579800" type="submit" onClick={handleSubmittt}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import "./BookingSlots.css";
import { useNavigate } from 'react-router-dom';
import LanguageOption from './language-dropdown';

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
    const [language, setLanguage] = useState('en');

    const timeSlots = ["10:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"];

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="booking-container9800">
            <div className="register9800">
                <div className="form-container9800">
                    <div className="form-header9800">
                    <LanguageOption onChange={handleChangeLanguage} />
                        <div className="form-title9800">
                            {language === 'en' ? 'Book Slots For Training' : language === 'hi' ? 'प्रशिक्षण के लिए स्लॉट बुक करें' : language === 'be' ? 'প্রশিক্ষণের জন্য স্লট বুক করুন': 'Book Slots For Training'}
                        </div>
                        <span className="get-service9800">
                            {language === 'en' ? 'Fill up the form to get the service' : language === 'hi' ? 'सेवा प्राप्त करने के लिए फॉर्म भरें' :  language === 'be' ? 'সেবা পেতে ফর্ম পূরণ করুন': 'Fill up the form to get the service'}
                        </span>
                    </div>

                    <form className="booking-form219800" onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-section6529800">
                            <div className="input-group9800">
                                <div className="label9569800">
                                    {language === 'en' ? 'Name of the Institution' : language === 'hi' ? 'संस्थान का नाम' : language === 'be'?'প্রতিষ্ঠানের নাম':'Name of the Institution'}
                                </div>
                                <input
                                    className="inputflied1459800"
                                    type="text"
                                    name="Name"
                                    {...register("Name")}
                                    placeholder={language === 'en' ? 'Name' : language === 'hi' ? 'नाम' :language === 'be' ? 'নাম':  'Name'}
                                    value={userData.Name}
                                    onChange={postUserData}
                                />
                            </div>

                            <div className="input-group">
                                <div className="label9569800">
                                    {language === 'en' ? 'Phone Number' : language === 'hi' ? 'फोन नंबर' : language === 'be'?'ফোন নাম্বার': 'Phone Number'}
                                </div>
                                <input
                                    className="inputflied1459800"
                                    type="text"
                                    name="PhoneNumber"
                                    {...register("PhoneNumber")}
                                    placeholder={language === 'en' ? 'Phone Number' : language === 'hi' ? 'फोन नंबर' : language === 'be'? 'ফোন নাম্বার':'Phone Number'}
                                    value={userData.PhoneNumber}
                                    onChange={postUserData}
                                />
                            </div>

                            <div className="input-group">
                                <div className="label9569800">
                                    {language === 'en' ? 'Location' : language === 'hi' ? 'स्थान' : language === 'be'? 'অবস্থান': 'Location'}
                                </div>
                                <input
                                    className="inputflied1459800"
                                    type="text"
                                    name="location"
                                    {...register("location", { required: true, maxLength: 10 })}
                                    placeholder={language === 'en' ? 'Location' : language === 'hi' ? 'स्थान' :  language === 'be'?'অবস্থান':'Location'}
                                    value={userData.location}
                                    onChange={postUserData}
                                />
                            </div>
                        </div>

                        <div className="date-section9800">
                            <Form.Label className="label9569800">
                                {language === 'en' ? 'Pick your date' : language === 'hi' ? 'अपनी तारीख चुनें' : language === 'be'? 'আপনার তারিখ নির্বাচন করুন':'Pick your date'}
                            </Form.Label>
                            <input style={{padding:'1vh', borderRadius:'2vh'}}
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
                                <div className="label9569800">
                                    {language === 'en' ? 'Select Time Slot' : language === 'hi' ? 'समय स्लॉट चुनें' :  language === 'be'?'সময় স্লট নির্বাচন করুন':'Select Time Slot'}
                                </div>
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
                                    <p className="selected-slot9800">
                                        {language === 'en' ? 'You have selected:' : language === 'hi' ? 'आपने चुना है:' :  language === 'be'?'আপনি নির্বাচন করেছেন:': 'You have selected'} {selectedSlot}
                                    </p>
                                )}
                            </div>
                        </div>
                    </form>
                    <div style={{
                        display:"flex",
                        justifyContent:"center"
                    }}>
                    <button className="submit-button6579800" type="submit" onClick={handleSubmittt}>
                            {language === 'en' ? 'Submit' : language === 'hi' ? 'प्रस्तुत करें' : language === 'be'? 'জমা দিন':'Submit'}
                        </button></div>
                </div>
            </div>
        </div>
    );
}


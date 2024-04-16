import React, { useState } from "react";
import './notifications.css';
import Navbars from "./navbars";
import img24 from '../images/pmmodi.png';
import img25 from '../images/earthq.png';
import img26 from '../images/cyclone.png';
import img27 from '../images/floods.png';
import Languageoption from './Awareness/language-dropdown';

const languagecontent = {
    sl: {
        title: 'Government sent you an alert!',
        content1: `An earthquake struck the region near the Kalimpong district of West Bengal some while ago.
        Residents near this region are advised to be on alert and take the necessary precautions.
        Please feel free to reach out to us in the helpline numbers provided below in case of emergency.`,
        help: 'Get Help',
        content2: `Cyclone Michuang is expected to strike the Bay of Bengal in the next two days.
        There is a high chance of strong winds and heavy rains in the entire Eastern Coast of India.
        Please keep to the indoors as far as possible.
        Please feel free to reach out to us in the helpline numbers provided below in case of emergency.`,
        content3: `Heavy rains is expected in the state Of Assam over the next 3 days.
        There are high chances of the nearby areas facing floods.
        Please keep to the indoors as far as possible.
        Please feel free to reach out to us in the helpline numbers provided below in case of emergency.`,
        emhelp: `Emergency Helpline`,
        ponum: `Police: +91 33 2214 5000`,
        mednum: `Medical: +91 9830079999`,
        finum: `Fire Station: +91 033-22440101`,
        clobut: 'Close'
    },
    en: {
        title: 'Government sent you an alert!',
        content1: `An earthquake struck the region near the Kalimpong district of West Bengal some while ago.
        Residents near this region are advised to be on alert and take the necessary precautions.
        Please feel free to reach out to us in the helpline numbers provided below in case of emergency.`,
        help: 'Get Help',
        content2: `Cyclone Michuang is expected to strike the Bay of Bengal in the next two days.
        There is a high chance of strong winds and heavy rains in the entire Eastern Coast of India.
        Please keep to the indoors as far as possible.
        Please feel free to reach out to us in the helpline numbers provided below in case of emergency.`,
        content3: `Heavy rains is expected in the state Of Assam over the next 3 days.
        There are high chances of the nearby areas facing floods.
        Please keep to the indoors as far as possible.
        Please feel free to reach out to us in the helpline numbers provided below in case of emergency.`,
        emhelp: `Emergency Helpline`,
        ponum: `Police: +91 33 2214 5000`,
        mednum: `Medical: +91 9830079999`,
        finum: `Fire Station: +91 033-22440101`,
        clobut: 'Close'
    },
    hi: {
        title: 'सरकार ने आपको अलर्ट भेजा है!',
        content1: `कुछ देर पहले पश्चिम बंगाल के कलिम्पोंग जिले के पास भूकंप आया था.
        इस क्षेत्र के निकट के निवासियों को सतर्क रहने और आवश्यक सावधानी बरतने की सलाह दी जाती है।
        कृपया आपातकालीन स्थिति में नीचे दिए गए हेल्पलाइन नंबरों पर बेझिझक हमसे संपर्क करें।`,
        help: 'मदद लें',
        content2: `अगले दो दिनों में चक्रवात मिचुआंग के बंगाल की खाड़ी से टकराने की आशंका है।
        भारत के पूरे पूर्वी तट पर तेज हवाएं चलने और भारी बारिश की आशंका है.
        जहां तक ​​संभव हो कृपया घर के अंदर ही रहें।
        कृपया आपातकालीन स्थिति में नीचे दिए गए हेल्पलाइन नंबरों पर बेझिझक हमसे संपर्क करें।`,
        content3: `असम राज्य में अगले 3 दिनों में भारी बारिश की संभावना है।
        इससे आस-पास के इलाकों में बाढ़ आने की प्रबल संभावना है।
        जहां तक ​​संभव हो कृपया घर के अंदर ही रहें।
        कृपया आपातकालीन स्थिति में नीचे दिए गए हेल्पलाइन नंबरों पर बेझिझक हमसे संपर्क करें।`,
        emhelp: `आपातकालीन हेल्पलाइन`,
        ponum: `पुलिस: +91 33 2214 5000`,
        mednum: `चिकित्सा केंद्र: +91 9830079999`,
        finum: `अग्निशमन केंद्र: +91 033-22440101`,
        clobut: 'बंद करे'
    },
    be: {
        title: 'সরকার আপনাকে সতর্কবার্তা পাঠিয়েছে!',
        content1: `কিছুক্ষণ আগে পশ্চিমবঙ্গের কালিম্পং জেলার কাছে একটি ভূমিকম্প আঘাত হানে।
        এই অঞ্চলের কাছাকাছি বাসিন্দাদের সতর্ক থাকতে এবং প্রয়োজনীয় সতর্কতা অবলম্বন করার পরামর্শ দেওয়া হয়েছে।
        জরুরী পরিস্থিতিতে নীচে দেওয়া হেল্পলাইন নম্বরগুলিতে আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।`,
        help: 'সাহায্য পান',
        content2: `ঘূর্ণিঝড় মিচুয়াং আগামী দুই দিনের মধ্যে বঙ্গোপসাগরে আঘাত হানতে পারে।
        ভারতের পুরো পূর্ব উপকূলে প্রবল বাতাস এবং ভারী বৃষ্টির সম্ভাবনা রয়েছে।
        যতদূর সম্ভব বাড়ির ভিতরে রাখুন.
        জরুরী পরিস্থিতিতে নীচে দেওয়া হেল্পলাইন নম্বরগুলিতে আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।`,
        content3: `আগামী ৩ দিনে আসাম রাজ্যে ভারী বৃষ্টির সম্ভাবনা রয়েছে।
        আশেপাশের এলাকাগুলো বন্যার প্রবল সম্ভাবনা রয়েছে।
        যতদূর সম্ভব বাড়ির ভিতরে রাখুন.
        জরুরী পরিস্থিতিতে নীচে দেওয়া হেল্পলাইন নম্বরগুলিতে আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।`,
        emhelp: `জরুরী হেল্পলাইন`,
        ponum: `পুলিশ: +91 33 2214 5000`,
        mednum: `চিকিৎসা কেন্দ্র: +91 9830079999`,
        finum: `অগ্নি নির্বাপন কেন্দ্র: +91 033-22440101`,
        clobut: 'বন্ধ করুন'
    },
};


export default function Notifications() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [language, setLanguage] = useState('en');


    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    };

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="notifbody">
            <div className="navbar3579"><Navbars /></div>
            <div className="alertbody13">
                <div className="lang2451"><Languageoption onChange={handleChangeLanguage} /></div>
                <div className="alertcard1">
                    <div className="notifCont">
                        <img src={img24} className="notifpic" alt="pm" />
                        <div className="notifText">
                            <div className="notifText12">
                                <div className="new">
                                    <div className="headText" style={{ color: 'red', animation: 'blink-animation 1s infinite' }}><h2>{languagecontent[language].title}</h2></div>
                                    <div className="notifText13">{languagecontent[language].content1}
                                    </div>
                                    <div className="helpButton13">
                                        <button className="helpButton14" onClick={togglePopup}>{languagecontent[language].help}</button>
                                    </div>
                                </div>
                                <img src={img25} className="earthpic" />
                            </div>
                            {/* <div className="notifText14"><h5>Stay Safe!!</h5></div> */}
                            <div className="notifLast">Last updated: 8 days ago</div>
                        </div>
                    </div>
                </div>
                <div className="alertcard2">
                    <div className="notifCont">
                        <img src={img24} className="notifpic" alt="pm" />
                        <div className="notifText">
                            <div className="notifText12">
                                <div className="new">
                                    <div className="headText" style={{ color: 'red', animation: 'blink-animation 1s infinite' }}><h2>{languagecontent[language].title}</h2></div>
                                    <div className="notifText13">{languagecontent[language].content2}
                                    </div>
                                    <div className="helpButton13">
                                        <button className="helpButton14" onClick={togglePopup}>{languagecontent[language].help}</button>
                                    </div>
                                </div>
                                <img src={img26} className="earthpic" />
                            </div>
                            {/* <div className="notifText14"><h5>Stay Safe!!</h5></div> */}
                            <div className="notifLast">Last updated: 1 year ago</div>
                        </div>
                    </div>
                </div>
                <div className="alertcard3">
                    <div className="notifCont">
                        <img src={img24} className="notifpic" alt="pm" />
                        <div className="notifText">
                            <div className="notifText12">
                                <div className="new">
                                    <div className="headText" style={{ color: 'red', animation: 'blink-animation 1s infinite' }}><h2>{languagecontent[language].title}</h2></div>
                                    <div className="notifText13">{languagecontent[language].content3}
                                    </div>
                                    <div className="helpButton13">
                                        <button className="helpButton14" onClick={togglePopup}>{languagecontent[language].help}</button>
                                    </div>
                                </div>
                                <img src={img27} className="earthpic" />
                            </div>
                            {/* <div className="notifText14"><h5>Stay Safe!!</h5></div> */}
                            <div className="notifLast">Last updated: 2 years ago</div>
                        </div>
                    </div>
                </div>
            </div>
            {popupVisible && (
                <div className="helppopupbg">
                    <div className="helppopup">
                        <h3 className="emerhelp">{languagecontent[language].emhelp}</h3>
                        <ul className="helpnumList">
                            <li>{languagecontent[language].ponum}</li>
                            <li>{languagecontent[language].mednum}</li>
                            <li>{languagecontent[language].finum}</li>
                        </ul>
                        {/* <p>Contact us at: 123-456-7890</p> */}
                        <button onClick={togglePopup} className="closeBut13">{languagecontent[language].clobut}</button>
                    </div>
                </div>
            )}
        </div>
    );
}

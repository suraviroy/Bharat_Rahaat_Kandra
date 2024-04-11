
import React, { useState } from 'react';
import './UserPlatform.css';
import LanguageSelector from './language-dropdown';

const mycourse = "https://www.off2class.com/wp-content/themes/off2class/images/homepage/Teaching-Modes/card-1.png";
const myback = "https://i.ytimg.com/vi/sO2zpJuArRg/maxresdefault.jpg";
const myvideo="https://img.freepik.com/free-vector/marketing-strategist-with-laptop-working-with-video-content-video-content-marketing-video-marketing-strategy-digital-marketing-tool-concept_335657-2245.jpg?w=996&t=st=1704563273~exp=1704563873~hmac=176973e8f385a65694a3db7aaab753ecd4eec75b9f94865886d32511c7df7eed";
const mychatbot="https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg?w=740&t=st=1704563322~exp=1704563922~hmac=2de3d5254eb151225160bf638d1e105d3f8d84aef8b7e288b5949d3a36aeaf1a";
const myslot="https://img.freepik.com/free-vector/appointment-booking-with-calendar-concept_23-2148556783.jpg?w=740&t=st=1704563527~exp=1704564127~hmac=87428bea5f0c8ba2da8f3dc927fb7b058de2a71bb7b648f8a73b08a70af4ef89";
const mygame="https://img.freepik.com/free-vector/play-earn-concept-illustration_614304-22.jpg?w=740&t=st=1704563578~exp=1704564178~hmac=976259a699b9cffbcfcebac5fb64d05214e89792dbf9d96b115b2393dd716d51";

const UserPlatform = () => {
  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="container3211">
      <div className="left-section3211">
        <div className="image-container3211">
          <img
            className="background-image3211"
            src={myback}
            alt="Bharat Suraksha Abhijan"
          />
          <div className="image-content3211">
          <LanguageSelector onChange={handleChangeLanguage} />
            <h1 className="title3211">
              {language === 'en'
                ? 'Disaster Awareness and Preparedness'
                : language === 'hi'
                ? 'आपदा जागरूकता और तैयारी'
                : language === 'be'
                ? 'বিপদ সচেতনতা এবং প্রস্তুতি'
                : 'Disaster Awareness and Preparedness'}
            </h1>
            <p className="description3211">
              {language === 'en'
                ? 'Bharat Raahat Kendra is a comprehensive, multilingual platform aimed at spreading awareness and preparedness for disaster management in India. This initiative involves various stakeholders, including the National Disaster Response Force (NDRF) and State Disaster Response Force (SDRF), to provide a wide range of initiatives and tools to educate and empower the public These are the different platforms to aware the common peolple.'
                : language === 'hi'
                ? 'भारत राहत केंद्र एक व्यापक, बहुभाषीय प्लेटफ़ॉर्म है जो भारत में आपदा प्रबंधन के लिए जागरूकता और तैयारी को फैलाने का उद्देश्य है। इस पहल में राष्ट्रीय आपदा प्रतिक्रिया बल (एनडीआरएफ) और राज्य आपदा प्रतिक्रिया बल (एसडीआरएफ) सहित विभिन्न स्तरीय स्तरों के हिस्सेदार शामिल हैं, ताकि जनता को शिक्षित और सशक्त करने के लिए विभिन्न पहल और उपकरण प्रदान किए जा सकें। ये सामान्य लोगों को जागरूक करने के लिए विभिन्न प्लेटफ़ॉर्म हैं।'
                : language === 'be'
                ? 'ভারত রাহাত কেন্দ্র বিপদ ব্যবস্থাপনা জন্য সচেতনতা এবং প্রস্তুতি প্রসারের লক্ষ্যে একটি ব্যাপক, বহুভাষিক প্ল্যাটফর্ম। এই উদ্যোগে বিভিন্ন প্রধান প্রতিষ্ঠানগুলি, যেমন জাতীয় দুর্যোগ প্রতিক্রিয়া বাহিনী (এনডিআরএফ) এবং রাজ্য দুর্যোগ প্রতিক্রিয়া বাহিনী (এসডিআরএফ) সহ বিভিন্ন প্রতিষ্ঠানগুলি যোগদান করে, জনগণকে শিক্ষা এবং সামর্থ্য দেওয়ার জন্য বিভিন্ন প্রতিষ্ঠানগুলি এবং সরবরাহ করার জন্য বিভিন্ন পদক্ষেপ এবং সরঞ্জাম অন্তর্ভুক্ত করে। এটি সাধারণ মানুষদের জন্য সচেতন করার জন্য বিভিন্ন প্ল্যাটফর্ম।'
                : 'Bharat Raahat Kendra is a comprehensive, multilingual platform aimed at spreading awareness and preparedness for disaster management in India. This initiative involves various stakeholders, including the National Disaster Response Force (NDRF) and State Disaster Response Force (SDRF), to provide a wide range of initiatives and tools to educate and empower the public These are the different platforms to aware the common peolple.'}
            </p>
          </div>
        </div>
      </div>
      <div className="right-section3211">
        <div className="card3211">
          <img className="cardimage3211" src={mycourse} alt="Card 1" />
          <p className="card-description3211">
            {language === 'en'
              ? 'Courses provide disaster knowledge, while mock exercises offer practical disaster preparedness training.'
              : language === 'hi'
              ? 'पाठ्यक्रम आपदा ज्ञान प्रदान करते हैं, जबकि मॉक अभ्यास व्यावहारिक आपदा तैयारी प्रशिक्षण प्रदान करते हैं।'
              : language === 'be'
              ? 'কোর্সগুলি দুর্যোগ সম্পর্কে জ্ঞান প্রদান করে, যেখানে মজাকর অনুশীলন ব্যবহারিক দুর্যোগ প্রস্তুতির প্রশিক্ষণ প্রদান করে'
              : 'Courses provide disaster knowledge, while mock exercises offer practical disaster preparedness training.'}
          </p>
          <a href="/Awareness">
            <button className="select-button3211">
              {language === 'en'
                ? 'Course'
                : language === 'hi'
                ? 'पाठ्यक्रम'
                : language === 'be'
                ? 'কোর্স'
                : 'Course'}
            </button>
          </a>
        </div>
        <div className="card3211">
          <img className="cardimage3211" src={myvideo} alt="Card 2" />
          <p className="card-description3211">
            {language === 'en'
              ? 'Visual training tools that educate people on disaster preparedness by illustrating appropriate actions.'
              : language === 'hi'
              ? 'दृश्य प्रशिक्षण उपकरण जो उचित कार्यों का चित्रण करके लोगों को आपदा तैयारियों पर शिक्षित करते हैं।'
              : language === 'be'
              ? 'ভিজ্যুয়াল প্রশিক্ষণের সরঞ্জাম যা যথাযথ কর্মের চিত্র তুলে ধরে মানুষকে দুর্যোগের প্রস্তুতি সম্পর্কে শিক্ষিত করে।'
              : 'Visual training tools that educate people on disaster preparedness by illustrating appropriate actions.'}
          </p>
          <a href="/Awareness">
            <button className="select-button3211">
              {language === 'en'
                ? 'Animated Video'
                : language === 'hi'
                ? 'एनिमेटेड वीडियो'
                : language === 'be'
                ? 'অ্যানিমেটেড ভিডিও'
                : 'Animated Video'}
            </button>
          </a>
        </div>
        <div className="card3211">
          <img className="cardimage3211" src={mychatbot} alt="Card 3" />
          <p className="card-description3211">
            {language === 'en'
              ? 'AI-Chatbot Provides instant information, answers questions, and guides individuals in disaster preparedness.'
              : language === 'hi'
              ? 'एआई-चैटबॉट तत्काल जानकारी प्रदान करता है, सवालों के जवाब देता है और आपदा तैयारियों में व्यक्तियों का मार्गदर्शन करता है।'
              : language === 'be'
              ? 'এআই-চ্যাটবট তাৎক্ষণিক তথ্য প্রদান করে, প্রশ্নের উত্তর দেয় এবং দুর্যোগের প্রস্তুতিতে ব্যক্তিদের গাইড করে।'
              : 'AI-Chatbot Provides instant information, answers questions, and guides individuals in disaster preparedness.'}
          </p>
          <a href="/Awareness">
            <button className="select-button3211">
              {language === 'en'
                ? 'Chatbot'
                : language === 'hi'
                ? 'चैटबॉट'
                : language === 'be'
                ? 'চ্যাটবট'
                : 'Chatbot'}
            </button>
          </a>
        </div>
        <div className="card3211">
          <img className="cardimage3211" src={myslot} alt="Card 4" />
          <p className="card-description3211">
            {language === 'en'
              ? 'Individuals and organizations reserve specific time slots for in-person mock exercises and workshops.'
              : language === 'hi'
              ? 'व्यक्ति और संगठन व्यक्तिगत मॉक अभ्यास और कार्यशालाओं के लिए विशिष्ट समय स्लॉट आरक्षित करते हैं।'
              : language === 'be'
              ? 'ব্যক্তি এবং সংস্থাগুলি ব্যক্তিগত মক ব্যায়াম এবং কর্মশালার জন্য নির্দিষ্ট সময় স্লট সংরক্ষণ করে।'
              : 'Individuals and organizations reserve specific time slots for in-person mock exercises and workshops.'}
          </p>
          <a href="/BookingSlots">
            <button className="select-button3211">
              {language === 'en'
                ? 'Book Slot'
                : language === 'hi'
                ? 'बुक स्लॉट'
                : language === 'be'
                ? 'বুক স্লট'
                : 'Book Slot'}
            </button>
          </a>
        </div>
        <div className="card3211">
          <img className="cardimage3211" src={mygame} alt="Card 5" />
          <p className="card-description3211">
            {language === 'en'
              ? 'Gamified Platform is designed to engage all ages with real-life scenarios to make learning interactive.'
              : language === 'hi'
              ? 'गेमिफ़ाइड प्लेटफ़ॉर्म को सीखने को इंटरैक्टिव बनाने के लिए सभी उम्र के लोगों को वास्तविक जीवन के परिदृश्यों से जोड़ने के लिए डिज़ाइन किया गया है।'
              : language === 'be'
              ? 'গেমিফাইড প্ল্যাটফর্মটি শেখার ইন্টারেক্টিভ করার জন্য বাস্তব-জীবনের পরিস্থিতির সাথে সমস্ত বয়সীদের জড়িত করার জন্য ডিজাইন করা হয়েছে।'
              : 'Gamified Platform is designed to engage all ages with real-life scenarios to make learning interactive.'}
          </p>
          <a href="/Awareness">
            <button className="select-button3211">
              {language === 'en'
                ? 'Game'
                : language === 'hi'
                ? 'खेल'
                : language === 'be'
                ? 'খেলা'
                : 'Game'}
            </button>
          </a>
        </div>
        {/* Other cards can be similarly handled */}
      </div>
     
    </div>
  );
};

export default UserPlatform;

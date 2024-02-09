import React from 'react';
import './UserPlatform.css';

const mycourse = "https://www.off2class.com/wp-content/themes/off2class/images/homepage/Teaching-Modes/card-1.png";
const myback = "https://i.ytimg.com/vi/sO2zpJuArRg/maxresdefault.jpg";
const myvideo="https://img.freepik.com/free-vector/marketing-strategist-with-laptop-working-with-video-content-video-content-marketing-video-marketing-strategy-digital-marketing-tool-concept_335657-2245.jpg?w=996&t=st=1704563273~exp=1704563873~hmac=176973e8f385a65694a3db7aaab753ecd4eec75b9f94865886d32511c7df7eed";
const mychatbot="https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg?w=740&t=st=1704563322~exp=1704563922~hmac=2de3d5254eb151225160bf638d1e105d3f8d84aef8b7e288b5949d3a36aeaf1a";
const myslot="https://img.freepik.com/free-vector/appointment-booking-with-calendar-concept_23-2148556783.jpg?w=740&t=st=1704563527~exp=1704564127~hmac=87428bea5f0c8ba2da8f3dc927fb7b058de2a71bb7b648f8a73b08a70af4ef89";
const mygame="https://img.freepik.com/free-vector/play-earn-concept-illustration_614304-22.jpg?w=740&t=st=1704563578~exp=1704564178~hmac=976259a699b9cffbcfcebac5fb64d05214e89792dbf9d96b115b2393dd716d51";

const UserPlatform = () => {
  return (
    <div className="container3211">
    <div className="left-section3211">
      <div className="image-container3211">
        <img
          className="background-image3211"
          src= {myback}
          alt="Bharat Suraksha Abhijan"
        />
        <div className="image-content3211">
          <h1 className="title3211">Disaster Awareness and Preparedness</h1>
          <p className="description3211">
          Bharat Raahat Kendra is a comprehensive, multilingual platform aimed at spreading awareness and preparedness for disaster management in India. This initiative involves various stakeholders, including the National Disaster Response Force (NDRF) and State Disaster Response Force (SDRF), to provide a wide range of initiatives and tools to educate and empower the public These are the different platforms to aware the common peolple.
          </p>
        </div>
      </div>
    </div>
    <div className="right-section3211">
      <div className="card3211">
        <img className = "cardimage3211" src={mycourse} alt="Card 1" />
        <p className="card-description3211">Courses provide disaster knowledge, while mock exercises offer practical disaster preparedness training.
        </p>
        <a href="/Awareness"> 
            <button className="select-button3211">Course</button>
        </a>
      </div>
      <div className="card3211">
        <img className = "cardimage3211" src={myvideo} alt="Card 2" />
        <p className="card-description3211">Visual training tools that educate people on disaster preparedness by illustrating appropriate actions.
</p>
        <button className="select-button3211">Animated Video</button>
      </div>
      <div className="card3211">
        <img className = "cardimage3211" src={mychatbot} alt="Card 3" />
        <p className="card-description3211">AI-Chatbot Provides instant information, answers questions, and guides individuals in disaster preparedness. </p>
        <button className="select-button3211">Chatbot</button>
      </div>
      <div className="card3211">
        <img className = "cardimage3211" src={myslot} alt="Card 4" />
        <p className="card-description3211">Individuals and organizations reserve specific time slots for in-person mock exercises and workshops.</p>
        <a href="/BookingSlots"> <button className="select-button3211" >Book Slot</button></a>
      </div>
      <div className="card3211">
        <img className = "cardimage3211" src={mygame} alt="Card 5" />
        <p className="card-description3211">Gamified Platform is designed to engage all ages with real-life scenarios to make learning interactive.
</p>
        <button className="select-button3211">Game</button>
      </div>
    </div>
  </div>
  );
};

export default UserPlatform;
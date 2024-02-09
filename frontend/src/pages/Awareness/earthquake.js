import React from 'react';
import './earthquake.css';
import Languageoption from './language-dropdown';
import ReactPlayer from 'react-player'


const Earthquake = () => {
  return (
    <div className="earthquake-page">
      <Languageoption/>      
      <heading1 className="heading1">Earthquakes in India</heading1>
      <para1>India, a vast and geologically diverse country, is no stranger to earthquakes. The Indian subcontinent is situated on the boundary of the Indian tectonic plate and the Eurasian tectonic plate. The interaction of these plates results in significant seismic activity. India has a history of devastating earthquakes, with the Himalayan region, particularly the northern states, being one of the most seismically active areas.</para1>
      <para1>The historic earthquake of 1905 in Kangra, Himachal Pradesh, was one of the deadliest in Indian history, causing extensive damage and loss of life. The 2001 Bhuj earthquake in Gujarat is another unforgettable event, which led to widespread destruction and thousands of casualties. These events serve as reminders of the seismic vulnerability of the country.</para1>
      <para1>India is divided into several seismic zones, with Zone V being the most seismically active and Zone I the least. The National Disaster Management Authority (NDMA) and various state authorities have taken measures to mitigate the risks associated with earthquakes. Building codes and construction standards have been improved in recent years to enhance earthquake resilience.</para1>
      <para1>While seismic activity is inevitable, individuals and communities in India are encouraged to be prepared for earthquakes. Here are some important recommendations:</para1>
      
      <div className="image-container">
        <img src="https://www.hindustantimes.com/ht-img/img/2023/02/08/550x309/turkey_syria_earthquake_1675827422716_1675827423020_1675827423020.JPG" alt="Image 1" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Seismic_zones.jpg" alt="Image 2" />
      </div>
      <div classname="video-container">
        <ReactPlayer controls url='https://youtu.be/17kBVfGjI8c?si=OxUnw3NqnU4KbpdZ' /> 
      </div>
      {/*<div className="video-container"> 
      <iframe
        width="560"
        height="315"
        src="https://youtu.be/RqqqSnaTfQo?si=Wgk9BjrNrQpLJT7u.mp4"
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>*/}
    <div class="earthquake-page">
      <div class="dosdontearth1">
        <div class="dos-heading">Dos During an Earthquake:</div>
        <div class="dos-list">
          <div class="point1">1. Find a safe spot, such as under a sturdy table, desk, or doorway.</div>
          <div class="point1">2. Stay away from windows, glass, and heavy objects that could fall.</div>
          <div class="point1">3. Drop to the ground, take cover, and hold on.</div>
          <div class="point1">4. If you are outdoors, move to an open area away from buildings and trees.</div>
          <div class="point1">5. After the shaking stops, be prepared for aftershocks and check for injuries.</div>
        </div>
      </div>
      <div class="dosdontearth1">
        <div class="donts-heading">Don'ts During an Earthquake:</div>
        <div class="donts-list">
          <div class="point1">1. Don't run outside during the shaking, as falling debris poses a significant risk.</div>
          <div class="point1">2. Avoid using elevators, as they may become stuck or malfunction during an earthquake.</div>
          <div class="point1">3. Don't stand in a doorway, as this advice is outdated and not considered safe.</div>
          <div class="point1">4. Avoid lighting matches or using open flames during or after an earthquake, as gas leaks could occur.</div>
          <div class="point1">5. Do not spread rumors or panic; instead, listen to official sources for information and instructions.</div>
        </div>
      </div>
    </div>
      <div className="earthquake-page">
      {/* ... (previous content) ... */}

      {/* Quiz Play Button */}
        <a href='/Quiz'><button className="quiz-button">Proceed to Quiz</button></a>
      </div>
    </div>
  );
};

export default Earthquake;

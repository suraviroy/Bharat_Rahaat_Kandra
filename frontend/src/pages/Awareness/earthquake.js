// import React from 'react';
// import './earthquake.css';
// import Languageoption from './language-dropdown';
// import ReactPlayer from 'react-player'


// const Earthquake = () => {
//   return (
//     <div className="earthquake-page">
//       <Languageoption/>      
//       <heading1 className="heading1">Earthquakes in India</heading1>
//       <para1>India, a vast and geologically diverse country, is no stranger to earthquakes. The Indian subcontinent is situated on the boundary of the Indian tectonic plate and the Eurasian tectonic plate. The interaction of these plates results in significant seismic activity. India has a history of devastating earthquakes, with the Himalayan region, particularly the northern states, being one of the most seismically active areas.</para1>
//       <para1>The historic earthquake of 1905 in Kangra, Himachal Pradesh, was one of the deadliest in Indian history, causing extensive damage and loss of life. The 2001 Bhuj earthquake in Gujarat is another unforgettable event, which led to widespread destruction and thousands of casualties. These events serve as reminders of the seismic vulnerability of the country.</para1>
//       <para1>India is divided into several seismic zones, with Zone V being the most seismically active and Zone I the least. The National Disaster Management Authority (NDMA) and various state authorities have taken measures to mitigate the risks associated with earthquakes. Building codes and construction standards have been improved in recent years to enhance earthquake resilience.</para1>
//       <para1>While seismic activity is inevitable, individuals and communities in India are encouraged to be prepared for earthquakes. Here are some important recommendations:</para1>
      
//       <div className="image-container">
//         <img src="https://www.hindustantimes.com/ht-img/img/2023/02/08/550x309/turkey_syria_earthquake_1675827422716_1675827423020_1675827423020.JPG" alt="Image 1" />
//         <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Seismic_zones.jpg" alt="Image 2" />
//       </div>
//       <div classname="video-container">
//         <ReactPlayer controls url='https://youtu.be/17kBVfGjI8c?si=OxUnw3NqnU4KbpdZ' /> 
//       </div>
//       {/*<div className="video-container"> 
//       <iframe
//         width="560"
//         height="315"
//         src="https://youtu.be/RqqqSnaTfQo?si=Wgk9BjrNrQpLJT7u.mp4"
//         title="YouTube Video"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//     </div>*/}
//     <div class="earthquake-page">
//       <div class="dosdontearth1">
//         <div class="dos-heading">Dos During an Earthquake:</div>
//         <div class="dos-list">
//           <div class="point1">1. Find a safe spot, such as under a sturdy table, desk, or doorway.</div>
//           <div class="point1">2. Stay away from windows, glass, and heavy objects that could fall.</div>
//           <div class="point1">3. Drop to the ground, take cover, and hold on.</div>
//           <div class="point1">4. If you are outdoors, move to an open area away from buildings and trees.</div>
//           <div class="point1">5. After the shaking stops, be prepared for aftershocks and check for injuries.</div>
//         </div>
//       </div>
//       <div class="dosdontearth1">
//         <div class="donts-heading">Don'ts During an Earthquake:</div>
//         <div class="donts-list">
//           <div class="point1">1. Don't run outside during the shaking, as falling debris poses a significant risk.</div>
//           <div class="point1">2. Avoid using elevators, as they may become stuck or malfunction during an earthquake.</div>
//           <div class="point1">3. Don't stand in a doorway, as this advice is outdated and not considered safe.</div>
//           <div class="point1">4. Avoid lighting matches or using open flames during or after an earthquake, as gas leaks could occur.</div>
//           <div class="point1">5. Do not spread rumors or panic; instead, listen to official sources for information and instructions.</div>
//         </div>
//       </div>
//     </div>
//       <div className="earthquake-page">
//       {/* ... (previous content) ... */}

//       {/* Quiz Play Button */}
//         <a href='/Quiz'><button className="quiz-button">Proceed to Quiz</button></a>
//       </div>
//     </div>
//   );
// };

// export default Earthquake;
import React, { useState } from 'react';
import './earthquake.css';
import Languageoption from './language-dropdown';
import ReactPlayer from 'react-player';

const Earthquake = () => {
  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="earthquake-page">
      <Languageoption onChange={handleChangeLanguage} />
      <heading1 className="heading1">
        {language === 'en'
          ? 'Earthquakes in India'
          : language === 'hi'
          ? 'भारत में भूकंप'
          : language === 'be'
          ? 'ভারতে ভূমিকম্প'
          : 'Earthquakes in India'}
      </heading1>
      <para1>
        {language === 'en' ? (
          'India, a vast and geologically diverse country, is no stranger to earthquakes. The Indian subcontinent is situated on the boundary of the Indian tectonic plate and the Eurasian tectonic plate. The interaction of these plates results in significant seismic activity. India has a history of devastating earthquakes, with the Himalayan region, particularly the northern states, being one of the most seismically active areas.'
        ) : language === 'hi' ? (
          'भारत, एक विशाल और भूवैज्ञानिक रूप से विविध देश, भूकंप के लिए एक अजनबी नहीं है। भारतीय उपमहाद्वीप भारतीय टेक्टोनिक प्लेट और यूरेशियन टेक्टोनिक प्लेट की सीमा पर स्थित है। इन प्लेटों के बीच के संवेगनात्मक गतिविधि का परिणाम महत्वपूर्ण भूकंप है। भारत के पास भूकंप का एक इतिहास है, जिसमें हिमालयी क्षेत्र, विशेष रूप से उत्तरी राज्य, सबसे अधिक सिमाईक गतिविधि वाले क्षेत्रों में से एक है।'
        ) : language === 'be' ? (
          'ভারত, একটি বিশাল এবং ভৌতত্ত্বিকভাবে বৈচিত্র্যপূর্ণ দেশ, ভূমিকম্পের জন্য অপরিচিত নয়। ভারতীয় উপমহাদেশটি ভারতীয় টেকটোনিক প্লেট এবং ইউরেশিয়ান টেকটোনিক প্লেটের সীমান্তে অবস্থিত। এই প্লেটগুলির সংশ্লিষ্টতা গুলির সাথে গুণী মহাসাগরিত গুলির সাথে পরিণতি বোঝায় গুণী ভূমিকম্পের মূল সক্রিয়তা। ভারতের একটি ভূমিকম্পের ইতিহাস রয়েছে, হিমালয় অঞ্চল, বিশেষত উত্তরাঞ্চল, যেখানে সবচেয়ে অধিক সিসমিক সক্রিয় অঞ্চলের মধ্যে একটি।'
        ) : (
          'India, a vast and geologically diverse country, is no stranger to earthquakes. The Indian subcontinent is situated on the boundary of the Indian tectonic plate and the Eurasian tectonic plate. The interaction of these plates results in significant seismic activity. India has a history of devastating earthquakes, with the Himalayan region, particularly the northern states, being one of the most seismically active areas.'
        )}
      </para1>
      <para1>
        {language === 'en' ? (
          'The historic earthquake of 1905 in Kangra, Himachal Pradesh, was one of the deadliest in Indian history, causing extensive damage and loss of life. The 2001 Bhuj earthquake in Gujarat is another unforgettable event, which led to widespread destruction and thousands of casualties. These events serve as reminders of the seismic vulnerability of the country.'
        ) : language === 'hi' ? (
          'हिमाचल प्रदेश के कांगड़ा में 1905 का ऐतिहासिक भूकंप भारतीय इतिहास के सबसे घातक भूकंपों में से एक था, जिससे बड़े पैमाने पर क्षति हुई और जानमाल की हानि हुई। गुजरात में 2001 का भुज भूकंप एक और अविस्मरणीय घटना है, जिसके कारण व्यापक विनाश हुआ और हजारों लोग हताहत हुए। ये घटनाएँ देश की भूकंपीय संवेदनशीलता की याद दिलाती हैं।'
        ) : language === 'be' ? (
          'হিমাচল প্রদেশের কাংড়ায় 1905 সালের ঐতিহাসিক ভূমিকম্পটি ভারতীয় ইতিহাসের সবচেয়ে মারাত্মক ছিল, যার ফলে ব্যাপক ক্ষয়ক্ষতি এবং প্রাণহানি ঘটে। গুজরাটের 2001 সালের ভুজ ভূমিকম্প হল আরেকটি অবিস্মরণীয় ঘটনা, যার ফলে ব্যাপক ধ্বংসযজ্ঞ এবং হাজার হাজার হতাহতের ঘটনা ঘটে। এই ঘটনাগুলি দেশের ভূমিকম্পের দুর্বলতার অনুস্মারক হিসাবে কাজ করে।'
        ) : (
          'The historic earthquake of 1905 in Kangra, Himachal Pradesh, was one of the deadliest in Indian history, causing extensive damage and loss of life. The 2001 Bhuj earthquake in Gujarat is another unforgettable event, which led to widespread destruction and thousands of casualties. These events serve as reminders of the seismic vulnerability of the country.'
        )}
      </para1>
      <para1>
        {language === 'en' ? (
          'India is divided into several seismic zones, with Zone V being the most seismically active and Zone I the least. The National Disaster Management Authority (NDMA) and various state authorities have taken measures to mitigate the risks associated with earthquakes. Building codes and construction standards have been improved in recent years to enhance earthquake resilience.'
        ) : language === 'hi' ? (
          'भारत को कई भूकंपीय क्षेत्रों में विभाजित किया गया है, जोन V भूकंपीय रूप से सबसे अधिक सक्रिय है और जोन I सबसे कम है। राष्ट्रीय आपदा प्रबंधन प्राधिकरण (एनडीएमए) और विभिन्न राज्य प्राधिकरणों ने भूकंप से जुड़े जोखिमों को कम करने के लिए उपाय किए हैं। भूकंप लचीलापन बढ़ाने के लिए हाल के वर्षों में बिल्डिंग कोड और निर्माण मानकों में सुधार किया गया है।'
        ) : language === 'be' ? (
          'ভারতকে কয়েকটি সিসমিক জোনে বিভক্ত করা হয়েছে, জোন V সবচেয়ে সিসমিকভাবে সক্রিয় এবং জোন I সবচেয়ে কম। ন্যাশনাল ডিজাস্টার ম্যানেজমেন্ট অথরিটি (NDMA) এবং বিভিন্ন রাজ্য কর্তৃপক্ষ ভূমিকম্পের সাথে যুক্ত ঝুঁকি কমানোর জন্য ব্যবস্থা নিয়েছে। ভূমিকম্পের স্থিতিস্থাপকতা বাড়ানোর জন্য সাম্প্রতিক বছরগুলিতে বিল্ডিং কোড এবং নির্মাণের মান উন্নত করা হয়েছে।'
        ) : (
          'India is divided into several seismic zones, with Zone V being the most seismically active and Zone I the least. The National Disaster Management Authority (NDMA) and various state authorities have taken measures to mitigate the risks associated with earthquakes. Building codes and construction standards have been improved in recent years to enhance earthquake resilience.'
        )}
      </para1>
      <para1>
        {language === 'en' ? (
          'While seismic activity is inevitable, individuals and communities in India are encouraged to be prepared for earthquakes. Here are some important recommendations:'
        ) : language === 'hi' ? (
          'जबकि भूकंपीय गतिविधि अपरिहार्य है, भारत में व्यक्तियों और समुदायों को भूकंप के लिए तैयार रहने के लिए प्रोत्साहित किया जाता है। यहां कुछ महत्वपूर्ण सिफारिशें दी गई हैं:'
        ) : language === 'be' ? (
          'যদিও ভূমিকম্পের ক্রিয়াকলাপ অনিবার্য, ভারতে ব্যক্তি এবং সম্প্রদায়কে ভূমিকম্পের জন্য প্রস্তুত থাকতে উত্সাহিত করা হয়। এখানে কিছু গুরুত্বপূর্ণ সুপারিশ রয়েছে:'
        ) : (
          'While seismic activity is inevitable, individuals and communities in India are encouraged to be prepared for earthquakes. Here are some important recommendations:'
        )}
      </para1>

      <div className="image-container">
        <img
          src="https://www.hindustantimes.com/ht-img/img/2023/02/08/550x309/turkey_syria_earthquake_1675827422716_1675827423020_1675827423020.JPG"
          alt="Image 1"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Seismic_zones.jpg"
          alt="Image 2"
        />
      </div>
      

      <div className="video-container">
        <ReactPlayer controls url="https://youtu.be/17kBVfGjI8c?si=OxUnw3NqnU4KbpdZ" />
      </div>


      <div className="earthquake-page">
        <div className="dosdontearth1">
          <div className="dos-heading">
            {language === 'en'
              ? 'Dos During an Earthquake:'
              : language === 'hi'
              ? 'भूकंप के दौरान क्या करें:'
              : language === 'be'
              ? 'ভূমিকম্পের সময় কী করবেন:'
              : 'Dos During an Earthquake:'}
          </div>
          <div className="dos-list">
     
            <div class="point1">
            {language === 'en'
              ? '1. Find a safe spot, such as under a sturdy table, desk, or doorway.'
              : language === 'hi'
              ? '1. एक सुरक्षित स्थान खोजें, जैसे किसी मजबूत मेज, डेस्क या दरवाजे के नीचे।'
              : language === 'be'
              ? '1. একটি নিরাপদ স্থান খুঁজুন, যেমন একটি শক্ত টেবিল, ডেস্ক বা দরজার নিচে।'
              : '1. Find a safe spot, such as under a sturdy table, desk, or doorway'}
              </div>
              <div class="point1">
            {language === 'en'
              ? '2. Stay away from windows, glass, and heavy objects that could fall.'
              : language === 'hi'
              ? '2.खिड़कियों, शीशों और भारी वस्तुओं से दूर रहें जो गिर सकती हैं।'
              : language === 'be'
              ? '2 জানালা, কাঁচ এবং ভারী জিনিস থেকে দূরে থাকুন যা পড়ে যেতে পারে।'
              : '2. Stay away from windows, glass, and heavy objects that could fall.'}
              </div>
              <div class="point1">
            {language === 'en'
              ? '3. Drop to the ground, take cover, and hold on.'
              : language === 'hi'
              ? '3. ज़मीन पर गिरें, ढकें और पकड़ें।'
              : language === 'be'
              ? '3. মাটিতে পড়ুন, আবরণ নিন, এবং ধরে রাখুন।'
              : '3. Drop to the ground, take cover, and hold on.'}
              </div>
              <div class="point1">
            {language === 'en'
              ? '4. If you are outdoors, move to an open area away from buildings and trees.'
              : language === 'hi'
              ? '4.यदि आप बाहर हैं, तो इमारतों और पेड़ों से दूर किसी खुले क्षेत्र में चले जाएँ।'
              : language === 'be'
              ? '4. আপনি যদি বাইরে থাকেন, তাহলে বিল্ডিং এবং গাছ থেকে দূরে একটি খোলা জায়গায় যান।'
              : '4. If you are outdoors, move to an open area away from buildings and trees.'}
              </div>
              <div class="point1">
            {language === 'en'
              ? '5. After the shaking stops, be prepared for aftershocks and check for injuries'
              : language === 'hi'
              ? '5. झटके रुकने के बाद, झटकों के लिए तैयार रहें और चोटों की जांच करें'
              : language === 'be'
              ? '5. কাম্পন বন্ধ হওয়ার পরে, আফটারশকের জন্য প্রস্তুত থাকুন এবং আঘাতের জন্য পরীক্ষা করুন'
              : '5. After the shaking stops, be prepared for aftershocks and check for injuries'}
              </div>

          </div>
        </div>

        <div className="dosdontearth1">
          <div className="donts-heading">
            {language === 'en'
              ? "Don'ts During an Earthquake:"
              : language === 'hi'
              ? 'भूकंप के दौरान क्या न करें:'
              : language === 'be'
              ? 'ভূমিকম্পের সময় যা করবেন না:'
              : "Don'ts During an Earthquake:"}
          </div>
          <div className="donts-list">
           
            <div class="point1">
            {language === 'en'
              ? '1. Do not run outside during the shaking, as falling debris poses a significant risk.'
              : language === 'hi'
              ? '1. झटकों के दौरान बाहर न भागें, क्योंकि मलबा गिरने से बड़ा ख़तरा पैदा होता है।'
              : language === 'be'
              ? '1. কম্পনের সময় বাইরে দৌড়াবেন না, কারণ ধ্বংসাবশেষ পড়ে যাওয়া একটি উল্লেখযোগ্য ঝুঁকি তৈরি করে।'
              : '1. Do not run outside during the shaking, as falling debris poses a significant risk.'}
              </div>
              <div class="point1">
            {language === 'en'
              ? '2. Avoid using elevators, as they may become stuck or malfunction during an earthquake.'
              : language === 'hi'
              ? '2. लिफ्ट का उपयोग करने से बचें, क्योंकि भूकंप के दौरान वे फंस सकती हैं या ख़राब हो सकती हैं।'
              : language === 'be'
              ? '2 লিফট ব্যবহার করা এড়িয়ে চলুন, কারণ ভূমিকম্পের সময় সেগুলি আটকে যেতে পারে বা ত্রুটিপূর্ণ হতে পারে।'
              : '2. Avoid using elevators, as they may become stuck or malfunction during an earthquake.'}
              </div>
              <div class="point1">
            {language === 'en'
              ? '3. Do not stand in a doorway, as this advice is outdated and not considered safe.'
              : language === 'hi'
              ? '3. दरवाजे पर खड़े न रहें, क्योंकि यह सलाह पुरानी हो चुकी है और सुरक्षित नहीं मानी जाती है।'
              : language === 'be'
              ? '3. দরজায় দাঁড়াবেন না, কারণ এই পরামর্শটি পুরানো এবং নিরাপদ বলে মনে করা হয় না।'
              : '3. Do not stand in a doorway, as this advice is outdated and not considered safe.'}
              </div>
              <div class="point1">
            {language === 'en'
              ? '4. Avoid lighting matches or using open flames during or after an earthquake, as gas leaks could occur.'
              : language === 'hi'
              ? '4. भूकंप के दौरान या उसके बाद माचिस जलाने या खुली लौ का उपयोग करने से बचें, क्योंकि गैस रिसाव हो सकता है।'
              : language === 'be'
              ? '4. ভূমিকম্পের সময় বা পরে আলোর মিল বা খোলা শিখা ব্যবহার করা এড়িয়ে চলুন, কারণ গ্যাস লিক হতে পারে।'
              : '4. Avoid lighting matches or using open flames during or after an earthquake, as gas leaks could occur.'}
              </div>
              <div class="point1">
            {language === 'en'
              ? '5. Do not spread rumors or panic; instead, listen to official sources for information and instructions.'
              : language === 'hi'
              ? '5. अफवाहें या दहशत न फैलाएं; इसके बजाय, जानकारी और निर्देशों के लिए आधिकारिक स्रोतों को सुनें।'
              : language === 'be'
              ? '5. গুজব বা আতঙ্ক ছড়াবেন না; পরিবর্তে, তথ্য এবং নির্দেশাবলীর জন্য সরকারী সূত্রের কথা শুনুন।'
              : '5. Do not spread rumors or panic; instead, listen to official sources for information and instructions.'}
              </div>
          </div>
        </div>
      </div>
     
      <div className="earthquake-page">
        <a href="/Quiz">
          <button className="quiz-button">
            {language === 'en'
              ? 'Proceed to Quiz'
              : language === 'hi'
              ? 'क्विज़ पर बढ़ें'
              : language === 'be'
              ? 'কুইজে অগ্রসর হোন'
              : 'Proceed to Quiz'}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Earthquake;



import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './feedpage.css';
import Navbars from './navbars';
import LanguageSelector from './Awareness/language-dropdown';
const languageContent = {
  sl: {
    title1: 'MAHARASTRA FLOODS',
    content1: `The National Disaster Response Force (NDRF) has enhanced the number of its teams from 26 to 34 for undertaking rescue operations in the coastal areas of Maharashtra that have been hit by landslides and floods triggered by torrential rains.
    The NDRF teams have rescued about 1,800 stranded people and evacuated 87 people to safer places till now, he said.
    The force is constantly tracking the India Meteorological Department's weather forecast and the Central Water Commission's report with regard to Mumbai and coastal districts of the Konkan region in Maharashtra that are witnessing heavy rainfall since the last few days, the spokesperson said.
    An NDRF team usually has 47 personnel and they are equipped with life-saving equipment, inflatable boats and tree and pole cutters.`,
    link1: 'VIEW MORE',
    title2: 'NEPAL EARTHQUAKE',
    content2: `Seven teams, comprising 305 personnel equipped with rescue gear and sniffer dogs, left for Kathmandu in two batches. The first batch of a single team reached the devastated Nepal capital at 6 pm while the rest in the second batch landed three hours later. NDRF quickly got in touch with the Nepal army to understand the ground situation.
    Within hours of reaching the quake-hit region, NDRF pulled out seven survivors from beneath the debris. The next day, three more teams of NDRF joined in.
    India now had 748 people, including NDRF personnel and a few doctors, toiling to help the quake-hit Nepal.`,
    link2: 'VIEW MORE',
    title3: 'TURKEY EARTHQUAKE',
    content3: `Three teams of NDRF were running the rescue operations in Turkey. According to the information received, the three teams of NDRF cleared 30 work sites in Nurdagi and Hatay, in which 2 lives were saved and around 75 dead bodies had been removed from the debris.
    Multiple NDRF teams including women rescuers and doctors were sent to Turkey after a powerful earthquake hit Turkey last week.
    The Prime Minister Narendra Modi-led Indian  government had decided to send the teams for rescue and relief operations in Turkey.`,
    link3: 'VIEW MORE',
    title4: 'CYCLONE BIPARJOY',
    content4: `A total of 33 teams have been earmarked by the National Disaster Response Force (NDRF) to undertake relief and rescue operations in Gujarat and Maharashtra ahead of the expected landfall of cyclone 'Biparjoy' near the Jakhau port in Kutch district, officials said on Wednesday.`,
    link4: 'VIEW MORE',
    title5: 'KERALA FLOODS',
    content5: `“Black August”, this is how a National Disaster Response Force (NDRF) crew, dressed in Orange jumpsuits, upon their return from Kerala described the havoc caused by the floods. Narrating their ordeal of a week when at times they were without food, these men trained in disaster relief and rescue had been witness to several natural disasters but with 11 out of 14 districts of Kerala submerged under water, they were in for one of the worst floods in a century.`,
    link5: 'VIEW MORE',
    title6: 'ALL FEMALE TEAM',
    content6: `In yet another example of shattering of the proverbial glass ceiling, the first batch of over 100 women disaster combatants and rescuers has been inducted in the country’s federal calamity force NDRF.
    An all-female team of freshly trained National Disaster Response Force (NDRF) personnel was recently deployed for contingency duties on the banks of the Ganga river in Uttar Pradesh’s Garh Mukteshwar town, a senior force officer said.`,
    link6: 'VIEW MORE'
  },
  en: {
    title1: 'MAHARASTRA FLOODS',
    content1: `The National Disaster Response Force (NDRF) has enhanced the number of its teams from 26 to 34 for undertaking rescue operations in the coastal areas of Maharashtra that have been hit by landslides and floods triggered by torrential rains.
    The NDRF teams have rescued about 1,800 stranded people and evacuated 87 people to safer places till now, he said.
    The force is constantly tracking the India Meteorological Department's weather forecast and the Central Water Commission's report with regard to Mumbai and coastal districts of the Konkan region in Maharashtra that are witnessing heavy rainfall since the last few days, the spokesperson said.
    An NDRF team usually has 47 personnel and they are equipped with life-saving equipment, inflatable boats and tree and pole cutters.`,
    link1: 'VIEW MORE',
    title2: 'NEPAL EARTHQUAKE',
    content2: `Seven teams, comprising 305 personnel equipped with rescue gear and sniffer dogs, left for Kathmandu in two batches. The first batch of a single team reached the devastated Nepal capital at 6 pm while the rest in the second batch landed three hours later. NDRF quickly got in touch with the Nepal army to understand the ground situation.
    Within hours of reaching the quake-hit region, NDRF pulled out seven survivors from beneath the debris. The next day, three more teams of NDRF joined in.
    India now had 748 people, including NDRF personnel and a few doctors, toiling to help the quake-hit Nepal.`,
    link2: 'VIEW MORE',
    title3: 'TURKEY EARTHQUAKE',
    content3: `Three teams of NDRF were running the rescue operations in Turkey. According to the information received, the three teams of NDRF cleared 30 work sites in Nurdagi and Hatay, in which 2 lives were saved and around 75 dead bodies had been removed from the debris.
    Multiple NDRF teams including women rescuers and doctors were sent to Turkey after a powerful earthquake hit Turkey last week.
    The Prime Minister Narendra Modi-led Indian  government had decided to send the teams for rescue and relief operations in Turkey.`,
    link3: 'VIEW MORE',
    title4: 'CYCLONE BIPARJOY',
    content4: `A total of 33 teams have been earmarked by the National Disaster Response Force (NDRF) to undertake relief and rescue operations in Gujarat and Maharashtra ahead of the expected landfall of cyclone 'Biparjoy' near the Jakhau port in Kutch district, officials said on Wednesday.`,
    link4: 'VIEW MORE',
    title5: 'KERALA FLOODS',
    content5: `“Black August”, this is how a National Disaster Response Force (NDRF) crew, dressed in Orange jumpsuits, upon their return from Kerala described the havoc caused by the floods. Narrating their ordeal of a week when at times they were without food, these men trained in disaster relief and rescue had been witness to several natural disasters but with 11 out of 14 districts of Kerala submerged under water, they were in for one of the worst floods in a century.`,
    link5: 'VIEW MORE',
    title6: 'ALL FEMALE TEAM',
    content6: `In yet another example of shattering of the proverbial glass ceiling, the first batch of over 100 women disaster combatants and rescuers has been inducted in the country’s federal calamity force NDRF.
    An all-female team of freshly trained National Disaster Response Force (NDRF) personnel was recently deployed for contingency duties on the banks of the Ganga river in Uttar Pradesh’s Garh Mukteshwar town, a senior force officer said.`,
    link6: 'VIEW MORE'
  },
  hi: {
    title1: 'महाराष्ट्र बाढ़',
    content1: `राष्ट्रीय आपदा प्रतिक्रिया बल (एनडीआरएफ) ने मूसलाधार बारिश के कारण भूस्खलन और बाढ़ से प्रभावित महाराष्ट्र के तटीय इलाकों में बचाव अभियान चलाने के लिए अपनी टीमों की संख्या 26 से बढ़ाकर 34 कर दी है।
    उन्होंने कहा, एनडीआरएफ टीमों ने अब तक लगभग 1,800 फंसे हुए लोगों को बचाया है और 87 लोगों को सुरक्षित स्थानों पर पहुंचाया है।
    प्रवक्ता ने कहा कि बल मुंबई और महाराष्ट्र में कोंकण क्षेत्र के तटीय जिलों के संबंध में भारत मौसम विज्ञान विभाग के मौसम पूर्वानुमान और केंद्रीय जल आयोग की रिपोर्ट पर लगातार नज़र रख रहा है, जहां पिछले कुछ दिनों से भारी बारिश हो रही है।
    एनडीआरएफ की एक टीम में आमतौर पर 47 कर्मी होते हैं और वे जीवन रक्षक उपकरण, हवा वाली नावें और पेड़ और पोल कटर से लैस होते हैं।`,
    link1: 'और देखें',
    title2: 'नेपाल भूकंप',
    content2: `बचाव गियर और खोजी कुत्तों से लैस 305 कर्मियों वाली सात टीमें दो बैचों में काठमांडू के लिए रवाना हुईं। एक टीम का पहला जत्था शाम 6 बजे तबाह नेपाल की राजधानी पहुंचा, जबकि दूसरे बैच के बाकी लोग तीन घंटे बाद उतरे। जमीनी स्थिति को समझने के लिए एनडीआरएफ ने तुरंत नेपाल सेना से संपर्क किया।
    भूकंप प्रभावित क्षेत्र में पहुंचने के कुछ ही घंटों के भीतर एनडीआरएफ ने मलबे के नीचे से सात जीवित लोगों को बाहर निकाला। अगले दिन एनडीआरएफ की तीन और टीमें शामिल हुईं.
    भारत में अब एनडीआरएफ कर्मियों और कुछ डॉक्टरों समेत 748 लोग भूकंप प्रभावित नेपाल की मदद के लिए मेहनत कर रहे हैं।`,
    link2: 'और देखें',
    title3: 'तुर्की भूकंप',
    content3: `एनडीआरएफ की तीन टीमें तुर्की में रेस्क्यू ऑपरेशन चला रही थीं. प्राप्त जानकारी के मुताबिक, एनडीआरएफ की तीन टीमों ने नूरदागी और हाटे में 30 कार्य स्थलों को साफ किया, जिसमें 2 लोगों की जान बचाई गई और लगभग 75 शवों को मलबे से निकाला गया है.
    पिछले सप्ताह तुर्की में आए शक्तिशाली भूकंप के बाद महिला बचावकर्मियों और डॉक्टरों सहित एनडीआरएफ की कई टीमों को तुर्की भेजा गया था।
    प्रधानमंत्री नरेंद्र मोदी के नेतृत्व वाली भारत सरकार ने तुर्की में बचाव और राहत कार्यों के लिए टीमें भेजने का फैसला किया था।`,
    link3: 'और देखें',
    title4: 'चक्रवात बिपरजॉय',
    content4: `
    अधिकारियों ने बुधवार को कहा कि राष्ट्रीय आपदा प्रतिक्रिया बल (एनडीआरएफ) ने कच्छ जिले के जखाऊ बंदरगाह के पास चक्रवात 'बिपरजॉय' के संभावित भूस्खलन से पहले गुजरात और महाराष्ट्र में राहत और बचाव अभियान चलाने के लिए कुल 33 टीमें नियुक्त की हैं।`,
    link4: 'और देखें',
    title5: 'केरल बाढ़',
    content5: `"ब्लैक ऑगस्ट", केरल से लौटने पर नारंगी जंपसूट पहने राष्ट्रीय आपदा प्रतिक्रिया बल (एनडीआरएफ) के दल ने बाढ़ से हुई तबाही का वर्णन कुछ इस तरह किया। एक सप्ताह की अपनी आपबीती सुनाते हुए, जब कभी-कभी वे बिना भोजन के रह जाते थे, आपदा राहत और बचाव में प्रशिक्षित इन लोगों ने कई प्राकृतिक आपदाओं को देखा था, लेकिन केरल के 14 में से 11 जिले पानी में डूब गए थे, वे सबसे खराब स्थिति में से एक में थे। एक सदी में बाढ़.`,
    link5: 'और देखें',
    title6: 'सभी महिला टीम',
    content6: `लौकिक कांच की छत के टूटने का एक और उदाहरण, 100 से अधिक महिला आपदा लड़ाकों और बचावकर्ताओं के पहले बैच को देश के संघीय आपदा बल एनडीआरएफ में शामिल किया गया है।
    बल के एक वरिष्ठ अधिकारी ने कहा कि हाल ही में प्रशिक्षित राष्ट्रीय आपदा प्रतिक्रिया बल (एनडीआरएफ) कर्मियों की एक महिला टीम को उत्तर प्रदेश के गढ़ मुक्तेश्वर शहर में गंगा नदी के तट पर आकस्मिक कर्तव्यों के लिए तैनात किया गया था।`,
    link6: 'और देखें'
  },
  be: {
    title1: 'মহারাষ্ট্র বন্যা',
    content1: `ন্যাশনাল ডিজাস্টার রেসপন্স ফোর্স (এনডিআরএফ) মহারাষ্ট্রের উপকূলীয় অঞ্চলে উদ্ধার অভিযান পরিচালনার জন্য তার দলের সংখ্যা 26 থেকে বাড়িয়ে 34 করেছে যা প্রবল বৃষ্টির কারণে ভূমিধস এবং বন্যায় ক্ষতিগ্রস্ত হয়েছে।
    এনডিআরএফ দলগুলি এখন পর্যন্ত প্রায় 1,800 আটকা পড়া মানুষকে উদ্ধার করেছে এবং 87 জনকে নিরাপদ স্থানে সরিয়ে নিয়েছে, তিনি বলেছিলেন।
    বাহিনী ক্রমাগত ভারতের আবহাওয়া অধিদপ্তরের আবহাওয়ার পূর্বাভাস এবং কেন্দ্রীয় জল কমিশনের মুম্বাই এবং মহারাষ্ট্রের কোঙ্কন অঞ্চলের উপকূলীয় জেলাগুলির বিষয়ে প্রতিবেদনের উপর নজর রাখছে যা গত কয়েকদিন থেকে ভারী বৃষ্টিপাতের সাক্ষী রয়েছে, মুখপাত্র বলেছেন।
    একটি এনডিআরএফ দলে সাধারণত 47 জন কর্মী থাকে এবং তারা জীবন রক্ষাকারী সরঞ্জাম, স্ফীত নৌকা এবং গাছ এবং খুঁটি কাটার দিয়ে সজ্জিত থাকে।`,
    link1: 'আরো দেখুন',
    title2: 'নেপাল ভূমিকম্প',
    content2: `রেসকিউ গিয়ার এবং স্নিফার ডগ দিয়ে সজ্জিত 305 জন কর্মী নিয়ে সাতটি দল দুটি ব্যাচে কাঠমান্ডুর উদ্দেশ্যে রওনা হয়েছে। একটি একক দলের প্রথম ব্যাচ বিধ্বস্ত নেপালের রাজধানীতে পৌঁছায় সন্ধ্যা ৬টায় এবং দ্বিতীয় ব্যাচের বাকিরা তিন ঘণ্টা পর অবতরণ করে। স্থল পরিস্থিতি বুঝতে এনডিআরএফ দ্রুত নেপাল সেনাবাহিনীর সাথে যোগাযোগ করে।
    ভূমিকম্প-বিধ্বস্ত অঞ্চলে পৌঁছানোর কয়েক ঘণ্টার মধ্যে, এনডিআরএফ ধ্বংসাবশেষের নিচ থেকে বেঁচে থাকা সাতজনকে বের করে। পরের দিন, NDRF-এর আরও তিনটি দল যোগ দেয়।
    ভারতে এখন 748 জন এনডিআরএফ কর্মী এবং কয়েকজন ডাক্তার সহ ভূমিকম্প-বিধ্বস্ত নেপালকে সাহায্য করার জন্য পরিশ্রম করছিল।`,
    link2: 'আরো দেখুন',
    title3: 'তুরস্কের ভূমিকম্প',
    content3: `NDRF-এর তিনটি দল তুরস্কে উদ্ধারকাজ চালাচ্ছে। প্রাপ্ত তথ্য অনুসারে, এনডিআরএফ-এর তিনটি দল নুরদাগি এবং হাতায় 30টি কাজের সাইট সাফ করেছে, যাতে 2টি জীবন রক্ষা করা হয়েছিল এবং প্রায় 75টি মৃতদেহ ধ্বংসস্তূপ থেকে সরানো হয়েছিল।
    গত সপ্তাহে তুরস্কে শক্তিশালী ভূমিকম্প আঘাত হানার পর নারী উদ্ধারকারী এবং চিকিৎসকসহ একাধিক এনডিআরএফ দলকে তুরস্কে পাঠানো হয়েছে।
    প্রধানমন্ত্রী নরেন্দ্র মোদির নেতৃত্বাধীন ভারত সরকার তুরস্কে উদ্ধার ও ত্রাণ তৎপরতার জন্য দল পাঠানোর সিদ্ধান্ত নিয়েছে।`,
    link3: 'আরো দেখুন',
    title4: 'সাইক্লোন বিপরজয়',
    content4: `কচ্ছ জেলার জাখাউ বন্দরের কাছে ঘূর্ণিঝড় 'বিপারজয়'-এর প্রত্যাশিত স্থলভাগের আগে গুজরাট ও মহারাষ্ট্রে ত্রাণ ও উদ্ধার অভিযান পরিচালনার জন্য জাতীয় দুর্যোগ প্রতিক্রিয়া বাহিনী (এনডিআরএফ) দ্বারা মোট 33 টি দল নির্ধারণ করা হয়েছে, কর্মকর্তারা বুধবার বলেছেন।`,
    link4: 'আরো দেখুন',
    title5: 'কেরালার বন্যা',
    content5: `"ব্ল্যাক অগাস্ট", এভাবেই ন্যাশনাল ডিজাস্টার রেসপন্স ফোর্স (এনডিআরএফ) ক্রু, কমলা জাম্পসুট পরিহিত, কেরালা থেকে ফিরে আসার পর বন্যার কারণে সৃষ্ট বিপর্যয় বর্ণনা করেছিল। তাদের এক সপ্তাহের অগ্নিপরীক্ষা বর্ণনা করে যখন তারা কখনও কখনও খাবারহীন ছিল, দুর্যোগের ত্রাণ ও উদ্ধারে প্রশিক্ষিত এই ব্যক্তিরা বেশ কয়েকটি প্রাকৃতিক বিপর্যয়ের সাক্ষী ছিল কিন্তু কেরালার 14টি জেলার মধ্যে 11টি জলের নীচে ডুবে গিয়েছিল, তারা সবচেয়ে খারাপ অবস্থার মধ্যে ছিল। এক শতাব্দীতে বন্যা।`,
    link5: 'আরো দেখুন',
    title6: 'সমস্ত মহিলা দল',
    content6: `প্রবাদের কাঁচের ছাদ ভেঙে ফেলার আরেকটি উদাহরণে, 100 টিরও বেশি মহিলা দুর্যোগ যোদ্ধা এবং উদ্ধারকারীদের প্রথম ব্যাচকে দেশের ফেডারেল ক্যাম্যালিটি ফোর্স এনডিআরএফ-এ অন্তর্ভুক্ত করা হয়েছে।
    সদ্য প্রশিক্ষিত জাতীয় বিপর্যয় মোকাবিলা বাহিনী (এনডিআরএফ) কর্মীদের একটি সর্ব-মহিলা দল সম্প্রতি উত্তর প্রদেশের গড় মুক্তেশ্বর শহরে গঙ্গা নদীর তীরে জরুরি দায়িত্ব পালনের জন্য মোতায়েন করা হয়েছিল, একজন সিনিয়র ফোর্স অফিসার জানিয়েছেন।`,
    link6: 'আরো দেখুন'
  }
};

export default function Feedpage(){
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [language, setLanguage] = useState('en');
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className='nabbbar45'><Navbars /></div>
      <MDBCard style={{ maxWidth: '1500px',overflowY:"hidden" }} className='card681'>
      <div style={{alignItems:'center', justifyContent:'center', marginLeft: '80vw', cursor:"pointer"}}>
        <LanguageSelector onChange={handleLanguageChange} />
      </div>
        <div className='anim1' data-aos='fade-right'>
          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage className='pic1' src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/07/maharashtra-ap1-1627149847.jpg' alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody className='text1'>
                <MDBCardTitle><h2>{languageContent[language].title1}</h2></MDBCardTitle>
                <MDBCardText style={{width:"55vw"}}>{languageContent[language].content1}</MDBCardText>
                <br />
                <br />
                <a href='https://www.indiatvnews.com/news/india/maharashtra-mayhem-raigad-ratnagiri-kolhapur-floods-rains-landslides-uddhav-thackeray-visit-death-toll-imd-latest-news-721747'><b style={{ color: 'grey' }}>{languageContent[language].link1}</b></a>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </div>
        <div className='anim2' data-aos='fade-left'>
          <MDBRow className='g-1'>
            <MDBCol md='8' >
              <MDBCardBody className='text2'>
                <MDBCardTitle><h2>{languageContent[language].title2}</h2></MDBCardTitle>
                <MDBCardText style={{width:"55vw"}}>{languageContent[language].content2}</MDBCardText>
                <br />
                <br />
                <a href='governancenow.com/news/regular-story/how-ndrf-helped-earthquake-hit-nepal'><b style={{ color: 'grey' }}>{languageContent[language].link2}</b></a>
              </MDBCardBody>
              <MDBCol md='4'>
                <MDBCardImage className='pic256' src='https://ndrf.gov.in/sites/default/files/n1_0.jpg' alt='...' fluid />
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </div>
        <div className='anim3' data-aos='fade-right'>
          <MDBRow className='g-2'>
            <MDBCol md='4'>
              <MDBCardImage className='pic3' src='https://images.mid-day.com/images/images/2023/feb/ndrfinisraelll_d.jpg' alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody className='text3'>
                <MDBCardTitle><h2>{languageContent[language].title3}</h2></MDBCardTitle>
                <MDBCardText style={{width:"55vw"}}>{languageContent[language].content3}</MDBCardText>
                <br />
                <a href='https://www.mid-day.com/news/india-news/article/turkey-earthquake-after-nurdagi-ndrf-teams-reach-hatay-for-rescue-operations-23270552'><b style={{ color: 'grey' }}>{languageContent[language].link3}</b></a>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </div>
        <MDBRow className='row-cols-2 row-cols-md-3 g-4'>
          <div className='anim4' data-aos='flip-right'>
            <MDBCol>
              <MDBCard className='h-101'>
                <MDBCardImage className='pic4'
                  src='https://assets.telegraphindia.com/telegraph/2023/Jun/1686736111_cyclone-5.jpg'
                  alt='...'
                  position='top'
                />
                <MDBCardBody>
                  <MDBCardTitle><h3><b>{languageContent[language].title4}</b></h3></MDBCardTitle>
                  <MDBCardText>{languageContent[language].content4}</MDBCardText>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <MDBBtn className='mdbbtn978' href='https://www.telegraphindia.com/india/cyclone-biparjoy-33-national-disaster-response-force-teams-earmarked-for-relief-and-rescue-ops-in-maharashtra-gujarat/cid/1945045'>{languageContent[language].link4}</MDBBtn>
                </MDBCardBody>
                <br />
                <MDBCardFooter>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </div>
          <div className='anim5' data-aos='flip-right'>
          <MDBCol>
       <MDBCard className='h-102'>
          <MDBCardImage className='pic5'
            src='https://images.indianexpress.com/2013/01/keralafloods.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><h3><b>{languageContent[language].title5}</b></h3></MDBCardTitle>
            <MDBCardText>{languageContent[language].content5}
            </MDBCardText>
            <br></br>
            <MDBBtn className='mdbbtn978' href='https://indianexpress.com/article/india/kerala-flood-ndrf-rescued-as-many-as-60000-people-5369990/'>{languageContent[language].link5}</MDBBtn>
          </MDBCardBody>
          <br></br>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      </div>
      <div className='anim6' data-aos='flip-right'>
      <MDBCol>
        <MDBCard className='h-103'>
          <MDBCardImage className='pic6'
            src='https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2021/01/05/Pictures/crematorium-roof-collapsed-in-muradnagar_e22e3250-4f71-11eb-98bd-18b55e3bb9aa.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><h3><b>{languageContent[language].title6}</b></h3></MDBCardTitle>
            <MDBCardText>{languageContent[language].content6}
            </MDBCardText>
            <br></br>
            <br></br>
            <MDBBtn className='mdbbtn978' href='https://www.hindustantimes.com/it-s-viral/india-s-first-all-female-team-gets-deployed-for-disaster-combat/story-wn4H41KQv8Kh4nY02FpWYP.html'>{languageContent[language].link6}</MDBBtn>
          </MDBCardBody>
          <br></br>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      </div>
        </MDBRow>
      </MDBCard>
    </div>
  );
}
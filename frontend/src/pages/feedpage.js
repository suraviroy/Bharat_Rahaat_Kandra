import React, {useEffect} from 'react';
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
import AOS from'aos';
import 'aos/dist/aos.css';
import './feedpage.css';
import Navbars from './navbars';

export default function Feedpage() {
    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);
  return (
    <div>  
     <div className='nabbbar45'> <Navbars /></div>
        <MDBCard style={{ maxWidth: '1500px' }} className='card681'>
      <div className='anim1' data-aos='fade-right'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage className='pic1' src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/07/maharashtra-ap1-1627149847.jpg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody className='text1'>
            <MDBCardTitle><h2>MAHARASTRA FLOODS</h2></MDBCardTitle>
            <MDBCardText>
            The National Disaster Response Force (NDRF) has enhanced the number of its teams from 26 to 34 for undertaking rescue operations in the coastal areas of Maharashtra that have been hit by landslides and floods triggered by torrential rains.
            The NDRF teams have rescued about 1,800 stranded people and evacuated 87 people to safer places till now, he said.
            The force is constantly tracking the India Meteorological Department's weather forecast and the Central Water Commission's report with regard to Mumbai and coastal districts of the Konkan region in Maharashtra that are witnessing heavy rainfall since the last few days, the spokesperson said.
            An NDRF team usually has 47 personnel and they are equipped with life-saving equipment, inflatable boats and tree and pole cutters.
            <br></br>
            <br></br>
            <a href='https://www.indiatvnews.com/news/india/maharashtra-mayhem-raigad-ratnagiri-kolhapur-floods-rains-landslides-uddhav-thackeray-visit-death-toll-imd-latest-news-721747'><b>VIEW MORE</b></a>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      </div>

      <div className='anim2' data-aos='fade-left'>
      <MDBRow className='g-1'>
        <MDBCol md='8'>
          <MDBCardBody className='text2'>
          <MDBCardTitle><h2>NEPAL EARTHQUAKE</h2></MDBCardTitle>
            <MDBCardText>
            Seven teams, comprising 305 personnel equipped with rescue gear and sniffer dogs, left for Kathmandu in two batches. The first batch of a single team reached the devastated Nepal capital at 6 pm while the rest in the second batch landed three hours later. NDRF quickly got in touch with the Nepal army to understand the ground situation.
            Within hours of reaching the quake-hit region, NDRF pulled out seven survivors from beneath the debris. The next day, three more teams of NDRF joined in.
            India now had 748 people, including NDRF personnel and a few doctors, toiling to help the quake-hit Nepal.
            <br></br>
            <br></br>
            <a href='governancenow.com/news/regular-story/how-ndrf-helped-earthquake-hit-nepal'><b>VIEW MORE</b></a>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
          <MDBCol md='4'>
          <MDBCardImage className='pic2' src='https://governancenow.com/temp/ndrf.jpg' alt='...' fluid />
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
            <MDBCardTitle><h2>TURKEY EARTHQUAKE</h2></MDBCardTitle>
            <MDBCardText>
            Three teams of NDRF were running the rescue operations in Turkey. According to the information received, the three teams of NDRF cleared 30 work sites in Nurdagi and Hatay, in which 2 lives were saved and around 75 dead bodies had been removed from the debris.
            Multiple NDRF teams including women rescuers and doctors were sent to Turkey after a powerful earthquake hit Turkey last week.
            The Prime Minister Narendra Modi-led Indian  government had decided to send the teams for rescue and relief operations in Turkey. The entire operation is being termed as 'Operation Dost'. The Government of India has offered all possible assistance to Turkey.
            The base of operation of NDRF Team India 10 and 11 has been shifted from Nurdagi to Hatay which is situated at a distance of about 100 km from Nurdagi. It has been told that the earthquake in Hatay has caused the most damage in Turkey
            <br></br>
            <a href='https://www.mid-day.com/news/india-news/article/turkey-earthquake-after-nurdagi-ndrf-teams-reach-hatay-for-rescue-operations-23270552'><b>VIEW MORE</b></a>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
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
            <MDBCardTitle><h3><b>CYCLONE BIPARJOY</b></h3></MDBCardTitle>
            <MDBCardText>
            A total of 33 teams have been earmarked by the National Disaster Response Force (NDRF) to undertake relief and rescue operations in Gujarat and Maharashtra ahead of the expected landfall of cyclone 'Biparjoy' near the Jakhau port in Kutch district, officials said on Wednesday.
            </MDBCardText>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <MDBBtn className='mdbbtn978' href='https://www.telegraphindia.com/india/cyclone-biparjoy-33-national-disaster-response-force-teams-earmarked-for-relief-and-rescue-ops-in-maharashtra-gujarat/cid/1945045'>VIEW MORE</MDBBtn>
          </MDBCardBody>
          <br></br>
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
            <MDBCardTitle><h3><b>KERALA FLOODS</b></h3></MDBCardTitle>
            <MDBCardText>
            “Black August”, this is how a National Disaster Response Force (NDRF) crew, dressed in Orange jumpsuits, upon their return from Kerala described the havoc caused by the floods. Narrating their ordeal of a week when at times they were without food, these men trained in disaster relief and rescue had been witness to several natural disasters but with 11 out of 14 districts of Kerala submerged under water, they were in for one of the worst floods in a century.
            </MDBCardText>
            <br></br>
            <MDBBtn className='mdbbtn978' href='https://indianexpress.com/article/india/kerala-flood-ndrf-rescued-as-many-as-60000-people-5369990/'>VIEW MORE</MDBBtn>
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
            <MDBCardTitle><h3><b>ALL FEMALE TEAM</b></h3></MDBCardTitle>
            <MDBCardText>
            In yet another example of shattering of the proverbial glass ceiling, the first batch of over 100 women disaster combatants and rescuers has been inducted in the country’s federal calamity force NDRF.
            An all-female team of freshly trained National Disaster Response Force (NDRF) personnel was recently deployed for contingency duties on the banks of the Ganga river in Uttar Pradesh’s Garh Mukteshwar town, a senior force officer said.
            </MDBCardText>
            <br></br>
            <br></br>
            <MDBBtn className='mdbbtn978' href='https://www.hindustantimes.com/it-s-viral/india-s-first-all-female-team-gets-deployed-for-disaster-combat/story-wn4H41KQv8Kh4nY02FpWYP.html'>VIEW MORE</MDBBtn>
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

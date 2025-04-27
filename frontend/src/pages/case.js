import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './case.css';
import AOS from'aos';
import 'aos/dist/aos.css';


function CardExample() {
    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);
  return (
    <div className='animation' data-aos='zoom-in'>
      <div className="Case12 d-flex justify-content-around">
      <Card style={{ width: '23rem' }}>
        <Card.Img className='pic1' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9pZu4hmN6-BMF3-31n3ylU4zSNyC2gUoXYq1deu8HPccRZwGsgiAV_xLlNRRaS64NMc&usqp=CAU" />
        <Card.Body>
          <Card.Title className='title'><b>RESCUE DURING PANDEMIC</b></Card.Title>
          <Card.Text>
          90 National Disaster Response Force (NDRF) teams was deployed in different parts of the country for flood mitigation and rescue operations with new drills in view of the Covid-19 pandemic.
          </Card.Text>
          <div className='more1'><Button variant="primary" ><a href='https://www.tribuneindia.com/news/nation/90-ndrf-teams-deployed-for-flood-operations-108575' className='but1010'>VIEW MORE</a></Button></div>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img className='pic2' variant="top" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/14135/production/_123192228_flittzcuyaumljb.jpg.webp" />
        <Card.Body>
          <Card.Title><b>RESCUE OPERATION OF TREKKERS</b></Card.Title>
          <Card.Text>
          Mountaineers from the Indian army have rescued an injured trekker who was stranded without food and water for nearly 48 hours in the cleft of a steep hill in the southern Indian state of Kerala.
          </Card.Text>
          <div className='more2'><Button variant="primary" ><a href='https://www.bbc.com/news/world-asia-india-60314111' className='but1010'>VIEW MORE</a></Button></div>
        </Card.Body>
      </Card>

      <div className='card3'>
      <Card style={{ width: '25rem' }}>
        <Card.Img className='pic3' variant="top" src="https://m.economictimes.com/thumb/msid-82976418,width-1200,height-900,resizemode-4,imgsize-130142/s.jpg" />
        <Card.Body>
          <Card.Title><b>RESCUE IN CYCLONE STRUCK ODISHA</b></Card.Title>
          <Card.Text>
          Rescue operations were underway in Odisha and West Bengal and teams cleared a large number of uprooted electric poles and trees to keep roads open in these states which were hit by cyclone Yaas.
          </Card.Text>
          <div className='more3'><Button variant="primary" ><a href='https://www.bbc.com/news/world-asia-india-60314111' className='but1010'>VIEW MORE</a></Button></div>
        </Card.Body>
      </Card>
      </div>
      </div>
    </div>
  );
}

export default CardExample;
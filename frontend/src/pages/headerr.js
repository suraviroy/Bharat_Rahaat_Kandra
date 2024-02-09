import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import './header.css'
function Headerr(){
    return (
        <header className="Apppp-header">
                  
                <div className='body'>
                <section className='contain'>
                  {/* <div className='top-card banner-msg-box form_container msg'>
                    <div className='top-Header'>
                       Let's fight with Hunger!
                    </div>
                    <div className='top-middle'>
                      "If you can't feed a hundred people, then feed just one" <br></br>
                      <div>  - Mother Teresa</div> 
                    </div>
                  </div> */}
                  <div className="slide" >
                  <Carousel className="slide"  controls={true} keyboard={true} touch={true} interval={2000}>
                        <Carousel.Item>
                          <img
                          className="d-block w-900 home-im"
                            src="https://www.hindustantimes.com/ht-img/img/2023/02/20/1600x900/Prime-Minister-Narendra-Modi-interacts-with-NDRF-p_1676919160972.jpg"
                            alt="First slide"
                          />
                          {/* <img
                          className="d-block w-900 home-im"
                            src="https://hwnews.in/wp-content/uploads/2023/01/Untitled-design-2023-01-19T123703.854-960x540.png"
                            alt="First slide"
                          /> */}
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                          className="d-block w-900 home-im"
                            src="https://www.ndrf.gov.in/sites/default/files/Dk5e-FhUwAAn5qT.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-900 home-im"
                            src="https://images.moneycontrol.com/static-mcnews/2020/08/8-mahad-raigad-building-collapse.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                          className="d-block w-900 home-im"
                            src="https://images.thequint.com/thequint%2F2023-02%2F8f11700f-86fc-47a5-9d57-d5abf43fb28b%2FTurkey.jpg?auto=format%2Ccompress&fmt=webp&width=720"
                            alt="Fourth slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                          className="d-block w-900 home-im"
                            src="https://static.toiimg.com/thumb/msid-87155727,imgsize-76766,width-1000,height-562,resizemode-8/87155727.jpg"
                            alt="Fifth slide"
                          />
                        </Carousel.Item>
                  </Carousel>
                  </div>
                  </section>

                </div>
              </header>

    )
    
}
export default Headerr;
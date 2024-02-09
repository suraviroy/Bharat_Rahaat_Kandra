import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './lightbox.css';

const MultiItemCarousel = () => {
  const settings = {
    showArrows: true,
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of items to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };

  return (
    <div className='base12'>
        <Slider {...settings}>
      <div className='pic1'>
        <img src='https://ndrf.gov.in/sites/default/files/FWR%2015072022%201.png' alt='Item1' className='img004'></img>
      </div>
      <div className='pic2'>
      <img src='https://www.thestatesman.com/wp-content/uploads/2019/07/QT-assam-flood.jpg' alt='Item2' className='img004'></img>
      </div>
      <div className='pic3'>
      <img src='https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-v91hdkgu03qu29ru7u20u0a044-20210725151846.Medi.jpeg' alt='Item3' className='img004'></img>
      </div>
      <div className='pic4'>
      <img src='https://images.indianexpress.com/2022/04/Rescue-operations-in-Deoghar-on-Tuesday-1.jpg' alt='Item4' className='img004'></img>
      </div>
      <div className='pic5'>
      <img src='https://c.ndtvimg.com/2023-02/pkiqpv5_turkey-quake-ndrf-rescue-650_625x300_08_February_23.jpg' alt='Item5' className='img004'></img>
      </div>
    </Slider>
    </div>
  );
};

export default MultiItemCarousel;
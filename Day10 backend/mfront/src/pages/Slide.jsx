import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../assests/css/style1.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slide = () => {
  return (
    <>
    <Swiper
spaceBetween={30}
centeredSlides={true}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
pagination={{
  clickable: true,
}}
navigation={true}
modules={[Autoplay, Pagination, Navigation]}
className="mySwiper"
>
<SwiperSlide>
    <img
            src={require('../assests/img/Slide21.png.jpg')}
            alt="Slide 1"
            className="slide-image"
          />
</SwiperSlide>
<SwiperSlide>
<img
            src={require('../assests/img/Slide14.png.jpg')}
            alt="Slide 2"
            className="slide-image"
          />
</SwiperSlide>
<SwiperSlide>
<img
            src={require('../assests/img/Slide15.png.jpg')}
            alt="Slide 3"
            className="slide-image"
          />
</SwiperSlide>
<SwiperSlide>
<img
            src={require('../assests/img/Slide18.png.jpg')}
            alt="Slide 4"
            className="slide-image"
          />
</SwiperSlide>
<SwiperSlide>
<img
            src={require('../assests/img/Slide1.jpeg.jpg')}
            alt="Slide 5"
            className="slide-image"
          />
</SwiperSlide>
<SwiperSlide>
<img
            src={require('../assests/img/Slide19.png.jpg')}
            alt="Slide 6"
            className="slide-image"
          />
</SwiperSlide>
<SwiperSlide>
<img
            src={require('../assests/img/Slide16.png.jpg')}
            alt="Slide 7"
            className="slide-image"
          />
</SwiperSlide>
<SwiperSlide>
<img
            src={require('../assests/img/Slide23.png.jpg')}
            alt="Slide 8"
            className="slide-image"
          />
</SwiperSlide>
<SwiperSlide>
<img
            src={require('../assests/img/Slide12.jpeg.jpg')}
            alt="Slide 9"
            className="slide-image"
          />
</SwiperSlide>
</Swiper>
</>
  );
}

export default Slide
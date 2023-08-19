import React from 'react';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import './HomeTestimonial.css';
import SwiperNavbutton from '../../components/Home2/HomeTstSwiperNavbutton';
function HomeTestimonial() {
    const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div>
      <h1 style ={{marginLeft:'590px', fontSize:'38px', marginTop:'50px'}}>Testimonials</h1>
      <div className = "PhotosMaindiv">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        // centeredSlides={true}
        spaceBetween={50}
  
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > 

            <div className = "SwiperSlider">
        <SwiperSlide ><img src = {require('../../images/1.png')} /></SwiperSlide>
        <SwiperSlide ><img src = {require('../../images/2.png')}/></SwiperSlide>
        <SwiperSlide><img src = {require('../../images/3.png')}/></SwiperSlide>
        <SwiperSlide><img src = {require('../../images/4.png')}/></SwiperSlide>
        </div>
        <SwiperNavbutton/>
      </Swiper>
      
      </div>
    </div>
  );
}

export default HomeTestimonial;

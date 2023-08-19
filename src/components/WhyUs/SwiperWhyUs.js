import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import SwiperNavButton from '../../components/WhyUs/Swiper';
function SwiperWhyUs() {
  return (
    <div>
     <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
       
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper" id = "MySwiperWhyUs"
      >
        <SwiperSlide data-hash="slide1"><img src = {require('../../images/Swiper-1.png')}/></SwiperSlide>
        <SwiperSlide data-hash="slide2"><img src = {require('../../images/Swiper-2.png')}/></SwiperSlide>
        <SwiperSlide data-hash="slide3"><img src = {require('../../images/Swiper-3.png')}/></SwiperSlide>
        <SwiperNavButton/>
      </Swiper>
    </div>
  );
}

export default SwiperWhyUs;

import React from 'react';
import { useSwiper } from 'swiper/react';
function SwiperNavbutton() {
    const swiper = useSwiper();
  return (
    <div className = "swiper-nav-buttons">
        <button className = "leftbutt" onClick = {()=>swiper.slidePrev()}><img src = {require('../../images/Left-Arrow.png')}/></button>
        <button className = "RightButt"  onClick = {()=>swiper.slideNext()}><img src = {require('../../images/Right-Arrow.png')}/></button>
    </div>
  );
}

export default SwiperNavbutton;

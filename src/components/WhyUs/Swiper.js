import React from 'react';
import { useSwiper } from 'swiper/react';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Paper from '@mui/material/Paper';
function SwiperNavButton() {
    const swiper = useSwiper();
  return (

    <div className = "Swiper-Nav-btn">
         <Paper style = {{borderRadius:'70px',marginTop:'30px',marginLeft:'190px',height:'40px',width:'130px'}} elevation={7}>
     <button className = "leftSwiBtn" onClick = {()=>swiper.slidePrev()}><KeyboardBackspaceIcon/></button>
      <button className = "RightSwiBtn" onClick = {()=>swiper.slideNext()}><EastIcon/></button>
      </Paper>
    </div>
  );
}

export default SwiperNavButton;

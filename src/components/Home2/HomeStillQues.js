import React from 'react';
import './HomeStillQues.css';
import Typography from '@mui/material/Typography';
import { Center } from '@mantine/core';

function HomeStillQues() {
  return (
        <div className = "MainStill">
            <h1 style = {{backgroundColor:'#7c269b', color:'white',marginLeft:'450px',marginTop:'60px'}}>Still Have Questions?</h1>
            <h6 id = "h52" style = {{backgroundColor:'#7c269b', color:'white'}}>Can't find the answers you're looking for? Please feel free to chat with our team</h6>
            <button id = "button3">Contact Us</button>
        </div>
  );
}

export default HomeStillQues;

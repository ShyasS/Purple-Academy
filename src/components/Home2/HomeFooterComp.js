import React from 'react';
import './HomeFooterComp.css';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
export default function HomeFooterComp() {
  return (
    <div id = "MainFooterComp">
    <Link to = '/Home'><img src = {require('../../images/applogo.jpg')} style = {{height:'40px', width:'160px',marginTop:'-90px',marginLeft:'70px'}}/></Link>
    <h4 id = "h44">Your New Career Path Awaits! <br></br> Rise to your true potential through Purple Academy</h4>
    <div className = "FIGIcon">
   <Link to ='/Home'><img src={require('../../images/Facebook logo.png')} style={{marginLeft:'40px'}}/></Link>
   <Link to ='/Home'><img src={require('../../images/instagram logo.png')} style={{marginLeft:'40px'}}/></Link>
   <Link to ='/Home'><img src={require('../../images/Github logo.png')} style={{marginLeft:'40px'}}/></Link>
   </div>
<div className = "MainTextFoot">
  <div className = "textFoot1">
    <h3 style = {{color:'#7C269B', fontWeight:'600',fontSize:'19px'}}>Know Purple Academy</h3>
    <Link to = '/Home' style = {{textDecoration:'none', color:'black'}}><h4>Home</h4></Link>
    <Link to = '/Home' style = {{textDecoration:'none', color:'black'}}><h4>Why Us</h4></Link>
  </div>
  <div className = "textFoot2">
    <h3 style = {{color:'#7C269B',fontWeight:'600',fontSize:'19px'}}>Useful Links</h3>
    <Link to = '/Home' style = {{textDecoration:'none', color:'black'}}><h4>Contact us</h4></Link>
    <Link to = '/Home' style = {{textDecoration:'none', color:'black'}}><h4>Terms & Conditions</h4></Link>
  </div>
  <div className = "textFoot3">
    <h3 style = {{color:'#7C269B',fontWeight:'600',fontSize:'19px'}}>Get in Touch with us</h3>
    <Link to = '/Home' style = {{textDecoration:'none', color:'black'}} ><h4><CallIcon style = {{color:'#7C269B'}}/>+91 73059 71619</h4></Link>
    <Link to = '/Home' style = {{textDecoration:'none', color:'black'}}><h4><EmailIcon style = {{color:'#7C269B'}}/>hello@purpleacademy.tech</h4></Link>
  </div>
  </div>
  <div className = "LastFooter">
        <h5>Copyright © 2023 Purple Academy</h5>
  </div>
    </div>
  );
}

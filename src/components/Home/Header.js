import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import HeaderPurple from './HeaderPurple';
function Header() {
  return (
    <div className = "Maindiv">
     <HeaderPurple/>
    <div className = "Icons">
    <FontAwesomeIcon icon={faBars} />
    </div>
   <ul>
    <li><NavLink to='/Home' id= "HomeTag">Home</NavLink></li>
    <li><NavLink to='/AllCourses' id = "HomeTag">All Courses</NavLink></li>
    <li><NavLink to='/WhyUs' id = "HomeTag">Why Us?</NavLink></li>
   </ul>
    <Link to = "/ContactUs"><button className = 'btn'>Contact Us</button></Link>
    </div>
  );
}

export default Header;





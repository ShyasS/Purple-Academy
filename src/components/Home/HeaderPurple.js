import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderPurple.css';
export default function HeaderPurple() {
  return (
    <div>
     <Link to = {{pathname : "/Home"}}><img src = {require('../../images/logo.png')}style={{height:'38.5px', width:'38.5px', marginTop:'16px', marginLeft:'100px'}} id = "LogoImg"/><p className="p1"><span className='Span1'>Purple</span><br></br><span className = 'Span2'>Academy</span></p></Link>
    </div>
  );
}

import React from 'react';
import './Home.css';
import HomeForm from './Home-Form';
import HomeUpcoming from '../../components/Home/HomeUpcoming';
import HomeFormComp from '../Home2/HomeFormComp';
import HomeTestimonial from '../../components/Home2/HomeTestimonial';
import HomeFreqQues from '../../components/Home2/HomeFreqQues';
import HomeStillQues from '../../components/Home2/HomeStillQues';
function Home() {
  return (
    <div>
  <img src = {require('../../images/Right Illustration.png')} style ={{marginLeft:'300px', marginTop:'-130px'}}/>

   <div className = "MainPara">
    <h1>Set yourself apart by <br></br>learning the skills that <br></br> actually matter!</h1>
    <p>Boost your <b>IT journey</b> by joining our comprehensive courses</p>
   <button className ='button1'>Join our Courses</button>
   <button className ='button2'>See all Courses</button>
   </div>
   <div className = "HomeFormComp">
   <HomeForm/>
   </div>
  <div>
    <HomeUpcoming/>
  </div>
    <HomeFormComp/>
<div>
  <HomeTestimonial/>
</div>
<div>
   <HomeFreqQues/>
</div>
<HomeStillQues/>
<div>
 
</div>
   </div>
  );
}

export default Home;

import React from 'react';
import './HomeFormComp.css';
function HomeFormComp() {
  return (
    <div className='MainHomeformComp'>
    <div clasName = "firstFourthComp">
    <img src = {require('../../images/Frame 1000001447.png')} style = {{height:'560px', width:'500px', marginTop:'100px', marginLeft:'100px'}}/>
    </div>
    <div className = "secondFourthComp">
      <h2 style={{marginTop:'100px',marginLeft:'50px',fontSize:'34px'}}>The  <span style = {{backgroundColor:'purple',color:'white',marginLeft:'10px'}}>Purple Academy </span> <span style = {{marginLeft:'8px'}}>Approach to <br></br> Training</span></h2>
<div className = "textPara">
  <img src = {require('../../images/Group 1000001204.png')} style ={{marginTop:'10px'}}/><p style = {{marginLeft:'50px',marginTop:'-39px'}}>Solve the lack of technical training covered in most colleges by providing hands-on <br></br> training in the latest software and programming</p>
  <hr style = {{marginLeft:'30px'}}></hr>
  <img src = {require('../../images/Group 1000001204.png')}/><p style = {{marginLeft:'50px',marginTop:'-39px'}}>Face the global nature of the tech industry by shaping top coders that have great <br></br> communication and social skills to truly excel</p>
  <hr style = {{marginLeft:'30px'}}></hr>
  <img src = {require('../../images/Group 1000001204.png')}/><p style = {{marginLeft:'50px',marginTop:'-39px'}}>Prepare candidates for the full industry experience through numerous practical exercises<br></br>and real-time use cases</p>
  <hr style = {{marginLeft:'30px'}}></hr>
  <img src = {require('../../images/Group 1000001204.png')}/><p style = {{marginLeft:'50px',marginTop:'-39px'}}>Accelerated courses where seasoned senior software engineers in the industry train <br></br>students</p>
  <hr style = {{marginLeft:'30px'}}></hr>
  <img src = {require('../../images/Group 1000001204.png')}/><p style = {{marginLeft:'50px',marginTop:'-39px'}}>Guided career path with dedicated career counselor</p>
  <hr style = {{marginLeft:'30px'}}></hr>
  <img src = {require('../../images/Group 1000001204.png')}/><p style = {{marginLeft:'50px',marginTop:'-39px'}}>End to end support through personalized placement assistance</p>
  <hr style = {{marginLeft:'30px'}}></hr>
</div>
    </div>




    </div>
  );
}

export default HomeFormComp;

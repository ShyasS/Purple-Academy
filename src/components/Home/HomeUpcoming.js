import React from 'react';
import './HomeUpcoming.css';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
function HomeUpcoming() {
  return (  
    <div className="MainHomeUpcCom">
       <h1 id = 'h1'>Upcoming Courses</h1>
      <div className = "MainCardUpcome">  
       <Card id = "Card" sx={{ maxWidth: 500, backgroundColor:'white' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       UI/UX
        </Typography>
         <div className = "Text1">
            <img style = {{heigth:'20px', width:'30px'}} src = {require('../../images/material-symbols_date-range-outline.png')}/>
            <p>26th August 2023</p>
         </div>
         <img src = {require('../../images/courseBg.jpg')} style = {{height:'100px',marginTop:'-38px',marginLeft:'50px',width:'100px',float:'right'}}/>
          <button className ="btn1">View Details</button>
      </CardContent>
    </Card>
    

    <Card id = "Card2" sx={{ maxWidth: 500, backgroundColor:'white' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Node js
        </Typography>
         <div className = "Text1">
            <img src = {require('../../images/material-symbols_date-range-outline.png')}/>
            <p>16th September 2023</p>
         </div>
         <img src = {require('../../images/courseBg.jpg')} style = {{height:'100px',marginTop:'-38px',marginLeft:'50px', width:'100px',float:'right'}}/>
          <button className ="btn1">View Details</button>
      </CardContent>
    </Card>
   
    <Card id = "Card3" sx={{ maxWidth: 500, backgroundColor:'white' }}>
      <CardContent>
        <Link to = '/' style = {{color:'purple'}}>
        <Typography style = {{margin:' 40px 100px',fontWeight:'600',fontSize:'20px'}}gutterBottom variant="h5" component="div">
View All Course
        </Typography>
        </Link>
      </CardContent>
    </Card>


    </div>



    </div>
  );
}

export default HomeUpcoming;

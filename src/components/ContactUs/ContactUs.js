import React from 'react';
import './ContactUs.css';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeForm from '../../components/Home/Home-Form';
 function ContactUs() {
    return (
        <div className = "MainContactUsPage">
             <h1 className = "h1ContactPa">Contact Us</h1>
             <h4 className = "h5ContactPa">We’d love to hear from you</h4>
             <div className = "ContactCardMain">
               <Paper sx = {{borderRadius:'30px'}} className = "ContactPaper" elevation={3}>
               <Card  sx = {{borderRadius:'30px'}} className = "ContactCard1">
      <HomeIcon sx = {{fontSize:'50px'}} className = "HomeIcon"/>
        <Typography gutterBottom variant="h5" component="div">
        <h2 className = "h2CArdContact">Phone</h2> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h3 className =  "h3Para0">+91 73059 71619</h3>
        </Typography>
    </Card>
    </Paper>
    <Paper sx = {{borderRadius:'30px'}} className = "ContactPaper" elevation={3} >
    <Card  sx = {{borderRadius:'30px'}} className = "ContactCard2">
    
      <MailIcon  sx = {{fontSize:'50px'}} className = "MailIcon"/>
        <Typography gutterBottom variant="h5" component="div">
        <h2 className = "h2CArdContMess" >Mail address</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h3  className =  "h3Para">hello@purpleacademy.tech</h3>
        </Typography>

    </Card>
    </Paper>
    <Paper sx = {{borderRadius:'30px'}} className = "ContactPaper" elevation={3}>
    <Card  sx = {{borderRadius:'30px'}} className = "ContactCard3" >

      <LocalPhoneIcon sx = {{fontSize:'50px'}} className = "AddressIcon"/>
        <Typography gutterBottom variant="h5" component="div">
        <h2 className = "h2CArdContact">Address</h2> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
<h3  className =  "h3Para1">2nd Floor, 6/1, Mohamed Sathak Trust, <br></br> Pycrofts Garden Rd, Chennai, Tamil Nadu <br></br> 600006</h3>
        </Typography>

    </Card>
    </Paper>
   </div>
    <div className ="ContactForm">
    <HomeForm/>
    </div>
    <br></br>
    <br></br>
       <br></br>
        </div>
    )
}

export default ContactUs;
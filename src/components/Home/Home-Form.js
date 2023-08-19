import React from 'react';
import './HomeForm.css';
import { Grid, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import HomeFormMutiselect from './HomeFormMutiselect';
function HomeForm() {
  return (
    <div>
      <Grid >
      <Paper elevation={10}  style = {{padding:'30px', height: '80vh', width:'500px', borderRadius:'5px'}}> 
          <h2>Start Your Career Now</h2>
          <div className = "MainInputBoots">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter here.."/>
  <br></br>

  <label for="exampleFormControlInput1" class="form-label">Email Address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter here.."/>
  <br></br>
  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter here.."/>
  <br></br>
  <label for="exampleFormControlInput1" class="form-label">Course Preference</label>
  <HomeFormMutiselect/>
  </div>
  <button className ='button1' style={{letterSpacing:'1.4px'}}>Join our Courses</button>
          </Paper>
      </Grid>
    </div>
  );
}

export default HomeForm;

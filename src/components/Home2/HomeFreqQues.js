import React,{useState}from 'react';
import './HomeFreqQues.css';
import { Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { Close } from '@mui/icons-material';
function HomeFreqQues() {
  const [Open,setOpen] = useState(false);
  const HandleClick = () => setOpen(!Open);
  return (
    <div className = "MainFreqdiv">
      <h2 style = {{marginTop:'80px', marginLeft:'460px',fontWeight:'600'}}>Frequently asked questions</h2>

      <div className="MainAccordion">
      <Accordion
     
      chevron={Open ? <img src = {require('../../images/minus-circle.png')}/> :< img src = {require('../../images/Icon wrap.png')} />}
    >
      <Accordion.Item value="customization" >
        <Accordion.Control  onClick = {HandleClick}><span className = "Span10">Are your courses beginner friendly?</span></Accordion.Control>
        <Accordion.Panel><span className = "Span13">Yes they are. The courses are created keeping in mind the basic requirements of the learners. The course is put together by industry leaders and covers the most essential aspects of the tech stack.</span></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item  value="flexibility">
        <Accordion.Control  onClick = {HandleClick}><span className = "Span10">How long are your courses?</span></Accordion.Control>
        <Accordion.Panel><span className = "Span13">Our course range from 3-4 months depending on the program selected.</span></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item  value="focus-ring">
        <Accordion.Control onClick = {HandleClick}><span className = "Span10">Do I get a certificate?</span></Accordion.Control>
        <Accordion.Panel><span className = "Span13">Yes you do, provided you complete the course and fulfil the course-related pre-requisites.</span></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="No annoying focus-ring">
        <Accordion.Control onClick = {HandleClick}><span className = "Span10">Do I get in-person help from teachers?</span></Accordion.Control>
        <Accordion.Panel><span className = "Span13">Yes you do. We focus on 1 on 1 coaching to help the students learn and adapt to the requirements of the industry.</span></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="photos">
        <Accordion.Control onClick = {HandleClick}><span className = "Span10">I have more questions. Who do I reach out to?</span></Accordion.Control>
        <Accordion.Panel><span className = "Span13">You can reach us at<br></br>
            <span className = "Span11"> +91-6381283007 <br></br>
            +91-7305971619</span> </span></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="videos">
        <Accordion.Control onClick = {HandleClick}><span className = "Span10">Do you help with placements</span></Accordion.Control>
        <Accordion.Panel><span className = "Span13">Yes, we do. Every student who gets certified with Purple Academy will be given placement assistance. Please speak to our academic counsellor to know more on this.</span></Accordion.Panel>
      </Accordion.Item>
    </Accordion>
      </div>

            <div>
                    <img src = {require('../../images/FAQ.gif')} className ="Gif"/>

            </div>
    </div>
  );
}

export default HomeFreqQues;

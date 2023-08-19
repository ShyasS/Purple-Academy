import React from 'react';
import {Link} from 'react-router-dom';
import './WhyUsPage.css';
import SwiperWhyUs from '../../components/WhyUs/SwiperWhyUs';
function WhyUsPage() {
  return (
    <div>
        <h3 id = "h3Whyus">Why Us?</h3>
        <div className = "ImageWHyUs">
           <img style = {{marginLeft:'130px',marginTop:'50px'}} src = {require('../../images/Image-1.png')}/>
           <div className = "ColorWhyUs"></div>
           <h2 className = "h2WhyUs">Empowering the next generation of IT experts, one course at a time.</h2>
        </div>
           <p className = "PWhyUs">Purple Academy helps you build and advance in your software engineering career. Our comprehensive program covers an unconventional <br></br>course syllabus that includes hackathons, debates, pair programming, workshops, and lots of first principles thinking! This is a unique<br></br>accelerated learning that gets you trained and ready for a career in the most happening industry.</p>
           <img className = "ImgPPSideImg" src = {require('../../images/Purple-side Image.png')}/>
           <div className = "MPara1WhyUs">
            <img src = {require('../../images/Img-1.png')}/>
            <p className = "Para1WhyUs">You get the benefit of a classroom setting that allows you to get <span className='SpanWhyUs'> hands-on training <br></br> from senior developers </span> who teach more than just outdated theories.</p>
           </div>

           <div className = "MPara1WhyUs">
            <img src = {require('../../images/Img-2.png')}/>
            <p className = "Para1WhyUs">We train you to be job-ready through  <span className='SpanWhyUs'>  live assessments  </span> that challenge you and help<br></br> you build an  <span className='SpanWhyUs'>impressive CV</span></p>
           </div>

           <div className = "MPara1WhyUs">
            <img src = {require('../../images/Img-3.png')}/>
            <p className = "Para1WhyUs">We prepare you for the  <span className='SpanWhyUs'> global nature of the Tech industry </span> by including sessions<br></br> on <span className='SpanWhyUs'> corporate communication and etiquette</span></p>
           </div>

           <div className = "MPara1WhyUs">
            <img src = {require('../../images/Img-4.png')}/>
            <p className = "Para1WhyUs">We help <span className='SpanWhyUs'>inspire</span>  our students through <span className='SpanWhyUs'>guest lectures from Business Leader</span> who<br></br>share valuable <span className='SpanWhyUs'>industry insights</span> </p>
           </div>

           <div className = "MPara1WhyUs">
            <img style = {{height:'140px',width:'130px'}}src = {require('../../images/Img-5.png')}/>
            <p className = "Para1WhyUs">Most importantly, we provide <span className='SpanWhyUs'> placement assistance </span>to all our students. Many past <br></br> students now work for international agencies and get <span className='SpanWhyUs'> global exposure despite</span> <br></br> <span className='SpanWhyUs'>having no prior tech background or experience.</span><br></br><Link className = "LinkWhyUs">View their testimonials here</Link></p>
           </div>

           <div>
            <h2 className = "h2PDDB">Purple Academy<span className = "Spanh2pddb"> x </span>doodleblue</h2>
            <img className = "ImgPPSideImg" src = {require('../../images/Purple-side Image.png')}/>
            <img className = "VectorImgPPSlide"src = {require('../../images/Vector-Image.png')}/>
            <p className = "P1pddb">Starting out as the brainchild of doodleblue, we were able to leverage the 10+ years of experience to train the next generation of software<br></br>engineers/product managers/product designers/QA automation Engineers to become successful in this highly competitive industry and<br></br>build the best digital products.</p>
           <p className = "P2pddb">doodleblue is a digital strategy consulting boutique that leads digital transformations for global brands, leading consultancies, famous<br></br>startups, fortune 500s and governments.</p>
           </div>
           
           <div className = "LSBrands">
            <h3 className = "h3LSBrands">Brands our software engineering experts have consulted & worked with</h3>

              <div className = "SwiperWhyUsMain">
               <SwiperWhyUs/>
              
              </div>
        
           </div>
          </div>
  );
}

export default WhyUsPage;

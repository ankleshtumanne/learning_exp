import React from 'react'
import "../Components/Footer.css"
import icon from '../assets/icon.png'
import twit from '../assets/twit.png'
import linkedin from '../assets/linkedin.png'
import fb from '../assets/fb.png'
const Footer = () => {
  return (
    <div > 
      <div id='footer'>
         <div className='child1'>
            <div>
              <h1>Contact Us!</h1>
              <p>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</p>
            </div>
            <div className='email'><input type="text" className='email'  placeholder='Email here' name="" id="" /> </div>
         </div>
         <div  className='child2'>
                 <div><img  className='icon' src={icon} alt="" />
                 <h4 className='learn'>Learning Exp. </h4>
                 <div style={{display:"flex"}}>
                      <img className='twit' src={twit} alt="" />
                      <img className='twit' src={linkedin} alt="" />
                      <img className='twit' src={fb} alt="" />

                 </div>
                 </div>
                 <div className='links'>
                   <h5>Links</h5>
                   <p>Home</p>
                   <p>Pricing</p>
                   <p>DownLoad</p>
                   <p>About</p>
                   <p>cervice</p>
                  </div>
                 <div  className='links'>
                  <h5>Support</h5>
                    <p>FAQ</p>
                    <p>
                      how It 
                    </p>
                    <p>Features</p>
                    <p>Contact</p>
                    <p>Reporting</p>
                 </div>
                 <div className='links'>
                 <h5>Contact Us</h5>
                    <p>+880 12345678</p>
                    <p>
                      ankleshtumanne77@gmail.com
                    </p>
                    <p>Pune City</p>
                  
                 </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import "./Header.css"
import learn_1 from "../assets/learn_1.png"
import {Link} from 'react-router-dom'
// import Part_1 from '../Home_components/Part_1'
import Baground_img from '../assets/Baground_img.png'
import Part5 from '../Home_components/Part5'
import Part6 from '../Home_components/Part6'

const Header = () => {
  return (
   <>
        <img className='baground' src={Baground_img} alt="" />
     {/* <div id='cont'>
        <div className='gradiant'></div>
     </div> */}
     <header>
        <div id='main'>
            <div className='parent_1'>
            <img className='img_logo' src={learn_1} alt="" />
            </div>

            <div className='home'>Home</div>
            <div className='services'>Service Us</div>
            <div className='why'>Why Us</div>
            <div className='our_goal'>Our Goal</div>
            <button className='Contact_us'>Contact Us </button>

            
        </div>
   </header>
   
   </>
  )
}

export default Header
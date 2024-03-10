import React from 'react'
import '../Components/Home.css'
import arrow from '../assets/arrow.png'
import leptop_img from '../assets/leptop_img.png'
import { Link } from 'react-router-dom'
import vedio_btn from '../assets/vedio_btn.png'

const Part_2 = () => {
  return (
    <div className='Main_p2'>
       <div >
         <h1 style={{color:"black"}}>We Create Learning Experience <br />With Exelent Technology.</h1>
         <p style={{color:"black"}}>Unlimitted Access To 100+ World-class Courses, Hands On <br />
         Projects, And Job Ready Certificatr Programe- <br />All Included In Your Subscription</p>
        <div className='btn_explore'> <button className='get_more'>Get More</button>
         <p className='explore'>Explore More</p>
         <img className='explore_img' src={arrow} alt="" /></div>
       </div>
       <div className='lepto_vedio'>
        <img className='leptop' src={leptop_img} alt=""  />
        {/* <video src=""></video> */}
      
       <Link  className='vedio_play' to="https://www.youtube.com/watch?v=vdN1W5ngh28"><div className=''><img className='vedio_btn' src={vedio_btn} alt="" /></div></Link>
       </div>
    </div>
  )
}

export default Part_2
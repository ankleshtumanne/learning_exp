import React from 'react'
import vedio_photo from '../assets/vedio_photo.png'
import '../Home_components/Part5.css'
import vedio_btn from '../assets/vedio_btn.png'
import { Link } from 'react-router-dom'
const Part5 = () => {
  return (
    <>
    
        <div className='part5_main' style={{justifyContent:"center",textAlign:"center"}}>
            <h1> Why Us</h1>
            <p> At Learn Exp. We Are Committed To Providing You With A Supirior Learning Experience. <br />That Empowers You to Achieve Your Goals . Join Us Today And <br />Embark On A journey Of  Descovery, Grow And Success. </p>
        </div>
        <div className='part5_vedio'>
            <div>
               <div className='secont_vedio'> <img className='sec_vedio_img'  src={vedio_photo} alt="" />
              <Link to="https://www.youtube.com/watch?v=vdN1W5ngh28"> <img className='icon_vedio' src={vedio_btn} alt="" /> </Link></div>
            </div>
            <div>
                <h2>Crafting Your Dream Career: Building a Path You Love with us</h2>

                <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
                <p>Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.</p>
            </div>
        </div>
    </>
  )
}

export default Part5
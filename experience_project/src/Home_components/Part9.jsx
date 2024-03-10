import React from 'react'
import "../Home_components/Part9.css"
import man from '../assets/man.png'
import star from '../assets/star.png'

const Part9 = () => {
  return (
    <div className='part9'>
        <div>
            <img className='man' src={man} alt="" />
        </div>
        <div> 
            <div  style={{display:"flex",marginLeft:"10rem",marginTop:"1rem"}}>
                <img style={{width:"3rem",height:"3rem"}} src={star} alt="" />
                <img style={{width:"3rem",height:"3rem"}} src={star} alt="" />
                <img style={{width:"3rem",height:"3rem"}} src={star} alt="" />
                <img style={{width:"3rem",height:"3rem"}} src={star} alt="" />
                <img style={{width:"3rem",height:"3rem"}} src={star} alt="" />
                
            </div>
        <p style={{paddingLeft:"10rem"}}>"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit <br /> Voluptatem Accusantium Doloremque <br /> Laudantium, <br /> Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem."</p>
        <h4 style={{paddingLeft:"10rem"}}>Riad Islam</h4>
        <h6 style={{paddingLeft:"10rem"}}>Product Manager <span style={{color:"blue"}}>@learning.Com</span></h6>
        </div>
    </div>
  )
}

export default Part9
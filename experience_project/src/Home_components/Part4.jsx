import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
const Part4 = () => {
  return (
    <div className='part4_main'>
        <div className='part4_item'>
            <img src={p3} alt="" />
            <h3 style={{textAlign:"center"}}>Learn Anything</h3>
            <p style={{paddingLeft:"1.5rem"}}>It Is A Long Stablised Fact That A Reader Will Be Sestructed by the Redable .</p>
        </div>
        <div className='part4_item' style={{backgroundColor:"rgb(250,248,228)"}}>
            <img src={p2} alt="" />
            <h3 style={{textAlign:"center"}}>Flexible Learning</h3>
            <p style={{paddingLeft:"1.5rem"}}>It Is A Long Stablised Fact That A Reader Will Be Sestructed by the Redable Content Of A Page .</p>
        </div>
        <div className='part4_item'>
            <img src={p1} alt="" />
            <h3 style={{textAlign:"center"}}>Export Connect</h3>
            <p style={{paddingLeft:"1.5rem"}}>It Is A Long Stablised Fact That A Reader Will Be Sestructed by the Redable</p>
        </div>
    </div>
  )
}

export default Part4
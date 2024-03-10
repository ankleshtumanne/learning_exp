import React from 'react'
import '../Home_components/Part7.css'
import p7_1 from "../assets/p7_1.png"
import p7_2 from "../assets/p7_2.png"
const Part7 = () => {
  return (
    <div className='part_7_main'>
            <div className='logo_child' style={{display:"flex"}}>
                <img style={{display:"flex"}} className='logo' src={p7_1} alt="" />
                
                <div >
                    <h2 style={{marginTop:"-1px"}}>100</h2>
                    <h4 style={{marginTop:"-15px",color:"blue"}}>Batch Complete</h4>
                    
                </div>
            </div>

            <div style={{display:"flex"}}>
                <img style={{display:"flex"}} className='logo' src={p7_1} alt="" />
                <div >
                    <h2 style={{marginTop:"-1px"}}>50+</h2>
                    <h4 style={{marginTop:"-15px",color:"blue"}}>Active Batches </h4>
                    
                </div>
            </div>
            <div style={{display:"flex"}}>
                <img className='logo' src={p7_2} alt="" />
                <div >
                    <h2 style={{marginTop:"-1px"}}>10000+</h2>
                    <h4 style={{marginTop:"-15px",color:"blue"}}>Student Suttisfied</h4>
                    
                </div>
            </div>
            <div  style={{display:"flex"}}>
                <img className='logo' src={p7_2} />
                <div >
                    <h2 style={{marginTop:"-1px"}}>10+</h2>
                    <h4 style={{marginTop:"-15px",color:"blue"}}> Course Module</h4>
                    
                </div>
            </div>
    </div>
  )
}

export default Part7
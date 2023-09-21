import React from 'react'
import Inform from './Inform'
import Update from './Update'
import Form from './Form'
import CreateEvent from './CreateEvent'


function Content() {
  return (
    
<div className="container">
  
    <Inform/>
    <CreateEvent/>
     
        <div className="mycard">
            
            <div className="mycard-inner">
                <h1 style={{padding : '5px', textAlign:"left"}} >Wednesday</h1>
                <p style={{textAlign:'right'}}><b>10 Sep, 2023</b></p>
                <hr/>
                <p style={{lineHeight: '18px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, sequi labore esse odio repellat possimus fugit  </p>

                <div className="comment">
                <p>Commets: <b>100</b></p> <p>views: <b>100</b></p>   <a  href="#" ><i className="gg-chevron-right-o"></i> </a>
             


                 </div> 
                 
            </div>

        </div>
        
</div>



   
  )
}

export default Content
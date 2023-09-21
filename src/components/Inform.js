import React from 'react'

function Inform() {
    const logo = require('./assets/logo.gif');
  return (
    <>
<h1 style={{color:'green'}}>School Diary</h1>
        <div className="home">
            <div className="logo">
            <img style={{width:'110px',height:'100px'}} src= {logo} alt="logo"/>
            </div>
            <div className="detail">
                <h5>School name: Little Hearts</h5>
                <h5>Grade: One</h5>
                <h5>Grade teacher: Madam Grace</h5>
            </div>

        </div>
</>
  )
}

export default Inform
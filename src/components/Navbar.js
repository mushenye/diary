 import {Link} from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
   
    <div className="navbar">
        <ul className="nav-ul">

           <Link to='/'><li className="nav-li">Diary</li></Link> 
            <Link to='/note'><li className="nav-li">Note</li></Link>
            <Link to='/activity'><li className="nav-li">Activities</li></Link>
            <Link to='/todo'><li className="nav-li">To-do</li></Link>
            <Link to='/calender'><li className="nav-li">Calender</li></Link>
        </ul>

    </div>
  );
}

export default Navbar
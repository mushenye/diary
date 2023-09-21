import React, { useState } from 'react'
import Form from './Form';

function Update() {
    const[ form ,setForm]= useState(false);

    const updateForm =()=>{
        setForm (true)
        }
        
  return (
    <>
    <div>
        <button onClick ={updateForm}>Update</button> 

    </div>
        
    </>
  )
  }

export default Update
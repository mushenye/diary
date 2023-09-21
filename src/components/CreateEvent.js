import React, { useState } from 'react'
import Form from './Form';

function CreateEvent() {
    const [form, setForm]= useState(false);

   const createForm = ()=>{
     setForm(true);
   
   }

   const formReset=()=>{
    setForm(false)
   }
  return (
    <div>
        <button onClick={createForm }>Create</button>
      <div>
       {form ? <Form onClick= {formReset}/> :  null}
      </div>
    </div>
  )
}

export default CreateEvent
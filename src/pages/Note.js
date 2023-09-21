import React, { useState } from 'react'
import Inform from '../components/Inform'
import Noteform from '../components/Noteform'
import NoteContent from '../components/NoteContent'
import NoteDataSend from '../components/NoteDataSend'

function Note() {

    const [note, setNote] = useState(false)

    const addnote = ()=>{
        setNote(true)
    }
    
    const viewnote =()=>{
        setNote(false)
    }

  return (
    <div className='container'>
  
    <Inform/>
        
       {note ? <button className='btn' onClick ={viewnote}>Note</button> :

       <button className='btn' onClick ={addnote}>Create</button> }

   
   { note ?<NoteDataSend/>: <NoteContent/>}
    
    
    
    
    </div>
    
  )
}

export default Note
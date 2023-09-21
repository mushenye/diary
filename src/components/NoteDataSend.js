
import React from 'react'
import Noteform from './Noteform'
function NoteDataSend() {

function sendnote (mydata){
    fetch('https://react-project-b47eb-default-rtdb.firebaseio.com/note.json',
 
 {
      method: 'POST',
         body: JSON.stringify(mydata),
         headers:{
       'content-Type': 'application/json'
        }
}

    ).then(()=>{
        window.location.replace('/note')
    });

}
  return (
    <div>

     <Noteform notesend={sendnote}/>   
    </div>
    
  )
}

export default NoteDataSend
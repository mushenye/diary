import React, { useRef } from 'react'

function Noteform(props) {
   const subjectEntered= useRef();
   const noteEntered = useRef();

    const submitNote= (e)=>{
      e.preventDefault();

    const newSubject=subjectEntered.current.value;
    const newNote =noteEntered.current.value;
 
  const mydata ={
    subject:newSubject,
    note:newNote

  
  };

  props.notesend(mydata);
   
  
    }

  

  return (
          <div className='formcontrol'>
                <form action="" onSubmit={submitNote}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="firstname" placeholder="Your Subject.." ref= {subjectEntered}/>
          
              <label htmlFor="note">Your Note</label>
              <textarea className="textarea" type="textarea" id="note" name="lastname" row="2" col="20" placeholder="Your note here.." ref={noteEntered}></textarea>

              <input type="submit" value="Submit"/>
            </form>
        
    </div>
  );
}

export default Noteform
import React, { useEffect } from "react";
import { useState } from "react";
function NoteContent() {
  const avatar = require("./assets/avatar.png");

  const [isLoading, setIsLoading] = useState(true);
  const [mydata, setmyData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-project-b47eb-default-rtdb.firebaseio.com/note.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const myDatas = [];

        for (const key in data) {
          const mydata = {
            id: key,
            ...data[key],
          };
          myDatas.push(mydata);
        }

        setIsLoading(false);
        setmyData(myDatas);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading.......</p>
      </section>
    );
  }
  console.log(mydata);

 
  return (
    < >
      {mydata.map((item) => (
      <div className="mycard">
      <div className="notecard">
      <h4 style={{ textAlign: "right" }}>12 Sep, 2023</h4>

       <h2>{item.subject}
       {/*  <img className="noteimage" src={avatar} alt={avatar} /> */}
       </h2>

       <hr></hr>
       <p style={{ lineHeight: "20px" }}> {item.note}</p>
      <h5 style={{ fontStyle: "italic", textAlign: "right" }}>
        Patrick Simani
      </h5>
    </div>
      </div> 
      ))}
    </>
  );
};
        

  
  

  // 
  //   <div className="notecard">
  //     <h4 style={{ textAlign: "right" }}>12 Sep, 2023</h4>

  //     <h2>
  //       {item.subject} <img className="noteimage" src={avatar} alt={avatar} />
  //     </h2>

  //     <hr></hr>
  //     <p style={{ lineHeight: "20px" }}> {item.note}</p>
  //     <h5 style={{ fontStyle: "italic", textAlign: "right" }}>
  //       Patrick Simani
  //     </h5>
  //   </div>
  // </div>;


export default NoteContent;

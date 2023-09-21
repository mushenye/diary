import React from "react";
import { useState } from "react";
import TodoAcomm from "./TodoAcomm";
function Todo() {


  const [restore, setRestore]= useState(true)
  const todos = [
    {
      id: 1,
      duty: "mark Exams",
      time: "12:30pm",
      accomplish: false,
    },
    {
      id: 2,
      duty: "class meeting",
      time: "2:00pm",
      accomplish: true,
    },
    {
      id: 3,
      duty: " teach grade 4 mathematics",
      time: "2:00pm",
      accomplish: true,
    },
  ];
 const doRestore= ()=>{
  setRestore(false)
 }


  return (
    <div name="accomplish">
      <ul onclick= {doRestore}>
        {todos.map((todo) => (
          <li key={todo.id} className="nav-li">
            <div className={todo.accomplish ? "list-card" : "list-card2"}>
              <h4>{todo.duty} </h4>
              <p style={{ textAlign: "right" }}> {todo.time} </p>

              {restore ?< TodoAcomm name={todo.accomplish}  />: null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

import UpdateTodo from "./UpdateTodo";
import React from "react";
import { useState } from "react";





function TodoAcomm(props) {

const [update, setUpdate] = useState(false);

const updateTodo = () => {
  setUpdate(true);
};

  return (
    <div>
      <i className="gg-chevron-right-o" onClick={updateTodo}></i>
      {update ? <UpdateTodo /> : null}
    </div>
  );
}

export default TodoAcomm;

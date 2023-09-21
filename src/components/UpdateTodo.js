import React, { useState } from "react";

function UpdateTodo(props) {
  const [cancel, setCancel] = useState(true);

  const cancelhandler = () => {
    setCancel(false);
  };

  return (
    <div className="mynotecard">
      <p>Do you want to update {props.name} ?</p>
      <div style={{ gap: "10px" }}>
        <button className="btn" onClick={cancelhandler}>
          {" "}
          cancel
        </button>
        <span> </span>
        <button className="btn"> update</button>
      </div>
    </div>
  );
}

export default UpdateTodo;

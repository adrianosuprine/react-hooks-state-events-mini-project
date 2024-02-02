import React from "react";

// receives {text,category,onDelete} as props
function Task({text,category,onDelete}) {
  
// a call back prop passed from grand parent to parent then to child
  function handleDeleteBtn() {
    onDelete(text)
  }

  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteBtn}>X</button>
    </div>
  );
}

export default Task;

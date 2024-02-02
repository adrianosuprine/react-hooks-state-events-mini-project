import React from "react";
import Task from "./Task";

// receives {task,onDeleteTask} as props 
// OnDelete is passed as a callback prop from grand-parent-child
function TaskList({tasks,onDeleteTask}) { 

  return (
   
    <div className="tasks" >
  {/* using map to access every item in the array */}
    {tasks.map((task) =>(
     <Task  key={task.text} text={task.text}  
     category={task.category}  onDelete={onDeleteTask}/>
    )
    
    )}
    </div>
    
  );
}

export default TaskList;

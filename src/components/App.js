import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

// THE PARENT COMPONENT
function App() {
  // gives the initial state 
  const [tasksL, setTasks] = useState(TASKS);
  const [selectedCategory,setSelectedCategory] = useState("All");
  function onTaskFormSubmit(newTask){
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }


  function handleDeleteTask(text) {
    const newTaskArray = tasksL.filter((task) => task.text !== text);
    setTasks(newTaskArray);
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);

    // Filter tasks based on the selected category
    const filteredTasks = category === "All" ? TASKS : TASKS.filter((task) => task.category === category);
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleSelectCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksL} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

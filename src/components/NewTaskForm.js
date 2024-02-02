import React,{useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [option,setOption] = useState("All");
  const [newTaskInput,setNewTask]= useState("");
  function handleOption(event){
    setOption(event.target.value)
  }
  const selectedCategory = categories.filter (item => {
    if (option === "All") {return true} else {return item.categories === option}
  });
  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new task object
  const newTask = {
    text: newTaskInput,
    category: option,
  };

  // Pass the new task to the parent component
  onTaskFormSubmit(newTask);

  // Reset form fields
  setNewTask("");
  setOption("All");

  };

  



  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" value={newTaskInput} onChange={handleNewTask}/>
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleOption}>
          {/* render <option> elements for each category here */}
          {/* <option value="All">Filter by category</option> */}
          <option value="Food">Food</option>
          <option value="Misc">Misic</option>
          <option value="Code">Code</option>
        </select>

      
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

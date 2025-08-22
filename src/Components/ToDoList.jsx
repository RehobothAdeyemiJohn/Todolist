import React, { useEffect, useState } from "react";
import "../App.css";
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  useEffect(() => {
        localStorage.setItem('myTask',JSON.stringify(tasks))
  }, [tasks])
  const savedItem = useEffect(() => {
    JSON.parse(localStorage.getItem('myTask'))
    setNewTask(savedItem)
  }, [])
  
  
  
 const addTask = () => {
  setTasks([...tasks, newTask]);   
  setNewTask("");                    
};
  const editTask = (index) => {
    const updatedTask = prompt("Edit your task:", tasks[index]);
    if (updatedTask) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1,updatedTask);
      setTasks(updatedTasks);
    }
  };
    const deleteTask = (index) => {
    const newone = ([...tasks])
    newone.splice(index,1)
    setTasks(newone)
  };
  return (
    <div className="to-do-list">
      <h1>To do list</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" style={{backgroundColor:"yellowgreen"}} onClick={()=>editTask(index)}>
              edit
            </button>
             <button className="delete-button" onClick={()=>deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;

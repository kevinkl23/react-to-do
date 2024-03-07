// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addItem = () => {

    if(!task) {
      alert('Enter Task');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: task
    };

    setTasks((prev) => [...prev, item]);

    setTask('');
  }

  const deleteTask = (id) => {
    // const newArray = tasks.filter(task => task.id !== id);

    // setTasks(newArray);
  }


  return (
    <div className="App">
      <h1>To-Do List</h1>

      <input type="text" placeholder='Add Task' value={task} onChange={e=>setTask(e.target.value)}>
      </input>

      <button onClick={()=>addItem()}>Add</button>

      <ul>
        {tasks.map(task => {
          return (
            <li key={task.id}>{task.value} <button onClick={deleteTask(task.id)}>X</button></li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

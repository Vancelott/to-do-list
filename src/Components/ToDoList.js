import React, { createElement, useState } from 'react';
import './ToDoList.css'

function ToDoList() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const [activeTasks, setActiveTasks] = useState([]);

  const toggleClass = (taskId) => {
    const index = activeTasks.indexOf(taskId);
    if (index === -1) {
      setActiveTasks([...activeTasks, taskId]);
    } else {
      setActiveTasks(activeTasks.filter((id) => id !== taskId));
    }
  };  

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.length > 0) { 
      setList([...list, { id: Date.now(), text: newTask, completed: false, className: "task2"}]);
      setNewTask('');
    }
  };

  const deleteListItem = (taskId) => {
    const newList = list.filter((task) => task.id !== taskId);
    setList(newList);
  };

  const toggleCompleted = (taskId) => {
    const newList = list.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setList(newList);
  };

    return (
        <div className="toDoList">
            <div className="input">
            <input className="inputField" value={newTask} onChange={handleChange}/>
            <button className="button" onClick={addTask}>+ Task</button>
            </div>
            <div className="taskContainer">
            <div className="taskWrap">
            <p className="toDoText">To do list</p>
            {list.map((task) => {
            const taskColor = {
                color: task.completed ? 'green' : '',
            };
            const isTaskActive = activeTasks.includes(task.id);
            const taskClassName = isTaskActive ? 'completed' : 'task';
            return (
                <div key={task.id} className={taskClassName}>
                <p style={taskColor}>{task.text}</p>
                <button className="button" onClick={() => deleteListItem(task.id)}>X</button>
                <button className="button" onClick={() => {toggleCompleted(task.id); toggleClass(task.id);}}>Completed</button>
                </div>
            );
            })}
            </div>
            </div>
        </div>
        );
    }

export default ToDoList;

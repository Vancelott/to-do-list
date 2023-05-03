import React from 'react';
import { useState } from 'react';


function ToDoList() {
    const [list, setList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        setList([...list, newTask])
    };

    const deleteListItem = (taskName) => {
        const newList = list.filter((task) => {
            return (taskName ? false : true);
        });
        setList(newList)
    };

    return (
        <div>
            <div>
                <input onChange={handleChange}/>
                <button onClick={addTask}>+ Task</button>
            </div>
            {list.map((task) => {
               return (
                <div>
                <p>{task}</p>
                <button onClick={() => deleteListItem(task)}>X</button>
                </div>
               )
            })}
        </div>
        );
    }

export default ToDoList;
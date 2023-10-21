import React, { useState } from 'react';
import CreateForm from './CreateForm';
import ToDo from './ToDo';
import './style/ToDoList.css';

const ToDoList = ({ tasks, addTask, editTask, deleteTask }) => {
  return (
    <div>
      <h3>Current Todos: </h3>
      <div className='to-do-list'>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <ToDo
            task={task}
            key={index}
            index={index}
            editTask={editTask}
            deleteTask={() => deleteTask(task.id)}
          />
        ))
      ) : (
        <p>You have no todos...</p>
      )}
    </div>
    </div>
  );
}

export default ToDoList;

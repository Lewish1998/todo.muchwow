import React, { useState } from 'react';
import CreateForm from './CreateForm';
import ToDo from './ToDo';
import './style/ToDoList.css';

const ToDoList = ({ tasks, addTask, editTask, deleteTask }) => {
  return (
    <div className='to-do-list'>
      <CreateForm addTask={addTask} />
      <h3>Current Todos: </h3>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <ToDo
            task={task}
            key={index}
            index={index}
            editTask={editTask}
            deleteTask={() => deleteTask(index)}
          />
        ))
      ) : (
        <p>You have no todos...</p>
      )}
    </div>
  );
}

export default ToDoList;

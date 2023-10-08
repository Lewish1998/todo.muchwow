import React, { useState } from 'react';
import CreateForm from './CreateForm';
import ToDo from './ToDo';
import './style/ToDoList.css';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTodo = (todo, deadline) => {
    setTodos([
      ...todos,
      {
        title: todo,
        deadline: deadline,
        completed: false,
      },
    ]);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
  };

  const saveEdit = (index, editedTitle) => {
    const updatedTodos = [...todos];
    updatedTodos[index].title = editedTitle;
    setTodos(updatedTodos);
    setEditingIndex(-1);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  if (todos.length > 0) {
  return (
    <div className='to-do-list'>
      <CreateForm addTodo={addTodo} />
      <h3>Current Todos: </h3>
      {todos.map((todo, index, deadline) => (
        <ToDo
          task={todo}
          deadline={deadline}
          key={index}
          index={index}
          editTodo={editTodo}
          isEditing={index === editingIndex}
          saveEdit={saveEdit}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )}
  else {
    return (
    <div className='to-do-list'>
      <CreateForm addTodo={addTodo} />
      <h3>You have no todos...</h3>
    </div>
      )
  }
};

export default ToDoList;

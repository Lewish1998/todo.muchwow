import React, { useState } from 'react';

const ToDo = ({ task, index, editTodo, isEditing, saveEdit, deleteTodo }) => {
  const [editedTask, setEditedTask] = useState(task.title);

  const handleEditInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSaveClick = () => {
    saveEdit(index, editedTask);
  };

  const handleDeleteClick = () => {
    deleteTodo(index);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={editedTask} onChange={handleEditInputChange} />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <p>{task.title}</p>
          <button onClick={() => editTodo(index)}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ToDo;

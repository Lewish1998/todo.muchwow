import React, { useState } from "react";
import "./style/ToDo.css";

const ToDo = ({ task, index, editTodo, isEditing, saveEdit, deleteTask }) => {
  const [editedTask, setEditedTask] = useState(task.title);
  const [editedDeadline, setEditedDeadline] = useState(task.deadline);

  const handleEditInputChange = (e) => {
    if (e.target.type === "text") {
      setEditedTask(e.target.value);
    } else if (e.target.type === "datetime-local") {
      setEditedDeadline(e.target.value);
    }
  };

  const handleSaveClick = () => {
    saveEdit(index, editedTask);
  };

  const handleDeleteClick = () => {
	console.log(index)
    deleteTask(index);
  };

  function formatDate(date) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className="to-do">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={handleEditInputChange}
          />
          <input
            type="datetime-local"
            value={editedDeadline}
            onChange={handleEditInputChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <p>{task.title}</p>
          {task.deadline ? (
            <p>Deadline: {formatDate(new Date(task.deadline))}</p>
          ) : (
            ""
          )}
          <button onClick={editTodo}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ToDo;

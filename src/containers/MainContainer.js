import React, { useEffect, useState } from 'react'
import ToDoList from '../components/ToDoList'
import Title from '../components/Title';
import Login from '../components/Login';

const MainContainer = () => {
  const url = "http://localhost:8080/api/tasks";
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error loading tasks: ", error);
    }
  }

  const addTask = async (task) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      loadTasks();
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };

  const editTask = async (taskId, updatedTask) => {
    try {
      const response = await fetch(url + `/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      loadTasks(); 
    } catch (error) {
      console.error('Error editing task: ', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(url + `/${taskId}`, {
        mode: 'cors',
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      loadTasks();
    } catch (error) {
      console.error('Error deleting task: ', error);
    }
  };

  return (
    <div>
      <Title />
      {/* <Login /> */}
      <ToDoList 
        tasks={tasks}
        addTask={addTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default MainContainer
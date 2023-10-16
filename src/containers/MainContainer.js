import React from 'react'
import ToDoList from '../components/ToDoList'
import TaskContainer from './TaskContainer'
import TaskTest from '../components/TaskTest'

const MainContainer = () => {
  return (
    <div>
      <h1>React ToDo App</h1>
      <h4>For all your to-do-ing needs</h4>
      <TaskContainer />
      <ToDoList />
    </div>
  )
}

export default MainContainer
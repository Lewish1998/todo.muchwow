import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ToDoList from '../components/ToDoList'
import Request from './helpers/Request'

const TaskContainer = () => {

    const [tasks, setTasks] = useState([])

    function componentDidMount() {
        const request = new Request();
        request.get('api/tasks')
        .then((data) => {console.log(data)})
    }

    componentDidMount()

  return (
    <>

    </>
  )
}

export default TaskContainer
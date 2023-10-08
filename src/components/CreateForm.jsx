import React, { useState } from 'react'

const CreateForm = ({addTodo}) => {

    const [todo, setTodo] = useState('')
    const [warning, setWarning] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (todo.length !== 0) {
            setWarning('')
            addTodo(todo)
            setTodo('')
        }
        else {
            setWarning('Please populate field')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <h4>{warning}</h4>
        <label>Title: </label>
        <input type='text' value={todo} onChange={(e) => {
            setTodo(e.target.value)
        }}/>               
        <button type='submit'>Create</button>
    </form>
  )
}

export default CreateForm
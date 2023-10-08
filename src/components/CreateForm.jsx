import React, { useState } from 'react'
import './CreateForm.css'

const CreateForm = ({addTodo}) => {

    const [todo, setTodo] = useState('')
    const [deadline, setDeadline] = useState(new Date())
    const [warning, setWarning] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (todo.length !== 0) {
            setWarning('')
            addTodo(todo, deadline)
            setTodo('')
        }
        else {
            setWarning('Please populate field')
        }
    }

  return (
		<div className="create-form">
			<form onSubmit={handleSubmit}>
				<h4>{warning}</h4>
				<div>
					<label>Title: </label>
					<input
						type="text"
						value={todo}
						onChange={(e) => {
							setTodo(e.target.value);
						}}
					/>
				</div>
				<div>
					<label>Deadline: </label>
					<input
						type="datetime-local"
						value={deadline}
						onChange={(e) => {
							setDeadline(e.target.value);
						}}
						required
					/>
				</div>
				<button type="submit">Create</button>
			</form>
		</div>
	);
}

export default CreateForm
import React, { useState } from 'react'
import './style/CreateForm.css'

const CreateForm = ({addTodo}) => {

    const [todo, setTodo] = useState('')
    const [deadline, setDeadline] = useState()
    const [warning, setWarning] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (todo.length !== 0) {
            setWarning('')
            addTodo(todo, deadline)
            setTodo('')
			setDeadline('')
        } else {
            setWarning('Please populate field')
        }
    }

	const setCurrentTime = () => {
		// setDeadline(new Date())
		const now = new Date();
		const formattedDateTime = now.toISOString().slice(0, 16);
		setDeadline(formattedDateTime);
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
					/>
					<button type='button' onClick={setCurrentTime}>Set Current Time</button>
				</div>
				<button type="submit">Create</button>
			</form>
		</div>
	);
}

export default CreateForm
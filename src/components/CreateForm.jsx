import React, { useState } from 'react'
import './style/CreateForm.css'

const CreateForm = ({addTask}) => {

    const [warning, setWarning] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [deadline, setDeadline] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (title.length !== 0) {
            setWarning('')

			const newTask = ({ 
				title: title, 
				description: description, 
				deadline: deadline
			})

            addTask(newTask)
			setTitle('')
			setDescription('')
			setDeadline('')
        } else {
            setWarning('Please populate field')
        }
    }

	const setCurrentTime = () => {
		const now = new Date();
		const formattedDateTime = now.toISOString().slice(0, 16);
		setDeadline(formattedDateTime);
	}

  return (
		<div className="create-form">
			<form onSubmit={handleSubmit}>
				<h4>{warning}</h4>
				<div>
					<span>Title: </span>
					<input
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value)
						}}
					/>
				</div>

				<div>
					<span>Description: </span>
				</div>
				<input
						type="text"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				<div>
					<span>Deadline: </span>
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
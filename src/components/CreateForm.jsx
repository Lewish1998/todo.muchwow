import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle, Button, ButtonGroup, Collapse, Grid, TextField } from '@mui/material';
import './style/CreateForm.css';
import { DateTimePicker } from '@mui/x-date-pickers';



const CreateForm = ({addTask}) => {
;
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (title.length !== 0) {
            setErrorMsg('')

			const newTask = ({ 
				title: title, 
				description: description, 
				deadline: deadline
			})

            addTask(newTask)
			setSuccessMsg("Task created!")

			setTitle('')
			setDescription('')
			setDeadline('')
        } else {
			setErrorMsg('Please input a title!')
        }
    }

	const setCurrentTime = () => {
		const now = new Date();
		const formattedDateTime = now.toISOString().slice(0, 16);
		setDeadline(formattedDateTime);
	}

	useEffect(() => {
		if (successMsg.length > 0 || errorMsg.length > 0) {
		  const timer = setTimeout(function () {
			setSuccessMsg('');
			setErrorMsg('');
		  }, 2000);
	
		  return () => {
			clearTimeout(timer);
		  };
		}
	  }, [successMsg, errorMsg]);

  return (
		<div className="create-form">

            <Grid className='grid-container' item xs={12}>
                <Collapse in={errorMsg != "" || successMsg != ""}>
                    {successMsg != "" ? (
                        <Alert sx={{ display: 'flex', justifyContent: 'center' }}
                            severity="success" 
							onClose={() => {
							  setSuccessMsg("")
							}}
                        >
                            <AlertTitle>{successMsg}</AlertTitle>
                        </Alert>
                    ) : (
                        <Alert sx={{ display: 'flex', justifyContent: 'center' }}
                            severity="error" 
							onClose={() => {
							  setErrorMsg("")
							}}
                        >
                            <AlertTitle>{errorMsg}</AlertTitle>
						</Alert>
                        )}
                </Collapse>
            </Grid>

			<form onSubmit={handleSubmit}>
				<div>
					{/* <p>Title: </p> */}
					<TextField
						label="Title"
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value)
						}}
					/>
				</div>

				<div>
					{/* <p>Description: </p> */}
				<TextField
						label="Deadline"
						type="text"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				</div>

				<div>
					<p>Deadline: </p>
						<input
							type="datetime-local"
							value={deadline}
							onChange={(e) => {
								setDeadline(e.target.value);
							}}
						/>
					</div>


					
					<div className='button-container'>
						<ButtonGroup>
						<Button id='set-time' type='button' variant='contained' onClick={setCurrentTime}>Set Current Time</Button>
						<Button id='submit' type="submit" variant='contained'>Create</Button>
						</ButtonGroup>
					</div>
			</form>
		</div>
	);
}

export default CreateForm
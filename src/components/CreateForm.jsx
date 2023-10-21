import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle, Button, ButtonGroup, Collapse, Grid, TextField } from '@mui/material';
import './style/CreateForm.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';



const CreateForm = ({addTask}) => {

	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [maxCharError, setMaxCharError] = useState('')

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState();

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

			console.log(deadline)

			setTitle('')
			setDescription('')
			setDeadline('')
        } 
		else if (title.length > 30) {
			setMaxCharError("Max 30 characters")
		}
		else if (description.length > 50) {
		setMaxCharError("Max 50 characters")
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
		if (successMsg.length > 0 || errorMsg.length > 0 || setMaxCharError.length > 0) {
		  const timer = setTimeout(function () {
			setSuccessMsg('');
			setErrorMsg('');
			setMaxCharError('');
		  }, 2000);
	
		  return () => {
			clearTimeout(timer);
		  };
		}
	  }, [successMsg, errorMsg]);

	useEffect(() => {
	  if (description.length > 50) {
		setMaxCharError("Max 50 characters")
	  } 
	  else if (title.length > 30) {
		setMaxCharError("Max 30 characters")
	  } else {
		setMaxCharError("")
	  }
	}, [title, description])

  return (
		<div className="create-form">

            <Grid className='grid-container' item xs={12}>
                <Collapse in={errorMsg !== "" || successMsg !== ""}>
                    {successMsg !== "" ? (
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

			<Grid className='grid-container-2' item xs={12}>
                <Collapse in={maxCharError !== ""}>
                        <Alert sx={{ display: 'flex', justifyContent: 'center' }}
                            severity="error" 
							onClose={() => {
							  setMaxCharError("")
							}}
                        >
                            <AlertTitle>{maxCharError}</AlertTitle>
						</Alert>
                </Collapse>
            </Grid>

			<form onSubmit={handleSubmit}>
				<div className='inputs'>
					<TextField
						label="Title"
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value)
						}}
					/>
				</div>

				<div className='inputs'>
				<TextField
						label="Description"
						type="text"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				</div>

				<div className='inputs'>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateTimePicker
							label="Deadline"
							ampm={false}
							viewRenderers={{
								hours: renderTimeViewClock,
								minutes: renderTimeViewClock,
								seconds: renderTimeViewClock,
							  }}
							type="datetime-local"
							onChange={(value) => setDeadline(value)}
						/>
					</LocalizationProvider>
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
import { useEffect, useState } from "react";

function TaskTest() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/api/tasks') //also containerised on port 8081 (must run docker)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error: ", error));
    }, []);

    return(
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    )

}

export default TaskTest;
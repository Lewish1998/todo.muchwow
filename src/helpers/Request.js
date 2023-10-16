import React from 'react'

useEffect(() => {
    fetch('http://localhost:8080/api/tasks') //also containerised on port 8081 (must run docker)
    .then((res) => res.json())
    .then((data) => setTodos(data))
    .catch((error) => console.error("Error: ", error));
  }, []);

export default Request
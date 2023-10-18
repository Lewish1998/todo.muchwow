#To run locally:

1. Clone the repository
2. cd into todo.muchwow
3. In your terminal type "npm install"
4. Ensure psql is installed on you local machine
5. create database named "todo"
6. cd into the dbapplication folder: (todo.muchwow\dbapplication\src\main\java\com\todo\dbapplication\DbapplicationApplication.java)
7. Run the dbapplicationapplication.java file. This should run the backend on port 8080. It will initially be unpopulated. You can manually add tasks (whilst functionality is being implimented)
8. In your terminal, ensure you are in the folders root directory and run "npm start"
9. Ignore styling issues, errors, lack of functionality, naming conventions, etc

In the dbapplication folder there are docker files in case you want to run the backend in a Docker container. To do this you will need to have Docker installed and set up.
Ensure you are in the dbapplication folder, and type "docker build . -t database:v1" in your terminal. (-t specifies name and tag for the image).
Then type "docker-compose up" in the terminal.
The containerised backed will now be running on port 8081 probably hopefully.


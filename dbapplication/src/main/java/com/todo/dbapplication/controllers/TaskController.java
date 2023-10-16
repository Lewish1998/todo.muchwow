package com.todo.dbapplication.controllers;

import com.todo.dbapplication.models.Task;
import com.todo.dbapplication.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TaskController {

    @Autowired
    TaskRepository taskRepository;

    @GetMapping(value="/tasks")
    public ResponseEntity<List<Task>> getAllTasks() {
        return new ResponseEntity<>(taskRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/tasks/{id}")
    public ResponseEntity getTask(@PathVariable Long id) {
        return new ResponseEntity<>(taskRepository.findById(id), HttpStatus.OK);
    }

//    @GetMapping(value="/tasks/{id}")
//    public ResponseEntity<List<Task>> findTaskByTitle(@RequestParam(name="title") String title) {
//        return new ResponseEntity<>(taskRepository.findTaskByTitle(title), HttpStatus.OK);
//    }

    @PostMapping(value="/tasks")
    public ResponseEntity<Task> postTask(@RequestBody Task task) {
        taskRepository.save(task);
        return new ResponseEntity<>(task, HttpStatus.CREATED);
    }

    @DeleteMapping("value=/tasks/{id}")
    public ResponseEntity deleteTask(@PathVariable Long id) {
        Optional<Task> existingTask = taskRepository.findById(id);
        taskRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}

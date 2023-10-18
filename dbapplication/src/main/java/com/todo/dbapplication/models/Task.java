package com.todo.dbapplication.models;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private Long taskId;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;
    
    @Column(name="deadline")
    private LocalDateTime deadline;

    public Task(Long taskId,String title, String description, LocalDateTime deadline) {
        this.taskId = taskId;
        this.title = title;
        this.description = description;
        this.deadline = deadline;
    }

    public Task() {

    }

    public Long getId() {
        return taskId;
    }

    public void setId(Long id) {
        this.taskId = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDateTime deadline) {
        this.deadline = deadline;
    }
    
}

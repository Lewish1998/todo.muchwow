package com.todo.dbapplication.components;

import com.todo.dbapplication.models.Task;
import com.todo.dbapplication.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.Month;

//@Profile("!test")
@Component
public class DataLoader {
    @Autowired
    TaskRepository taskRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        Task task1 = new Task(1L,"1: Title", "1: Description", LocalDateTime.of(2019, Month.MARCH, 28, 14, 33));

        taskRepository.save(task1);




    }
}

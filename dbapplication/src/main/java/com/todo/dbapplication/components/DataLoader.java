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
        Task task1 = new Task("1: Title", "1: Description", LocalDateTime.of(2019, Month.MARCH, 28, 14, 33));
        Task task2 = new Task("2: Title", "2: Description", LocalDateTime.of(2019, Month.APRIL, 15, 10, 45));
        Task task3 = new Task("3: Title", "3: Description", LocalDateTime.of(2019, Month.MAY, 5, 16, 20));
        Task task4 = new Task("4: Title", "4: Description", LocalDateTime.of(2019, Month.JUNE, 10, 9, 0));
        Task task5 = new Task("5: Title", "5: Description", LocalDateTime.of(2019, Month.JULY, 22, 18, 55));

        taskRepository.save(task1);
        taskRepository.save(task2);
        taskRepository.save(task3);
        taskRepository.save(task4);
        taskRepository.save(task5);



    }
}

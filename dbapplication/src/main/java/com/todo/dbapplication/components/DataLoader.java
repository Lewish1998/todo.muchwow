package com.todo.dbapplication.components;

import com.todo.dbapplication.models.Task;
import com.todo.dbapplication.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader {
    @Autowired
    TaskRepository taskRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        Task task1 = new Task("1: Title", "1: Description");
        taskRepository.save(task1);

        Task task2 = new Task("2: Title", "2: Description");
        taskRepository.save(task2);

        Task task3 = new Task("3: Title", "3: Description");
        taskRepository.save(task3);

        Task task4 = new Task("4: Title", "4: Description");
        taskRepository.save(task4);

        Task task5 = new Task("5: Title", "5: Description");
        taskRepository.save(task5);

        Task task6 = new Task("6: Title", "6: Description");
        taskRepository.save(task6);

        Task task7 = new Task("7: Title", "7: Description");
        taskRepository.save(task7);

        Task task8 = new Task("8: Title", "8: Description");
        taskRepository.save(task8);

        Task task9 = new Task("9: Title", "9: Description");
        taskRepository.save(task9);

    }
}

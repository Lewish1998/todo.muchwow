package com.todo.dbapplication;

import com.todo.dbapplication.models.Task;
import com.todo.dbapplication.repositories.TaskRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
class DbapplicationTests {

	@Autowired
	TaskRepository taskRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createTask() {
		String deadline = "2023-10-28T14:33:00";
		Task todo1 = new Task("First Todo", "This is my first todo", LocalDateTime.parse(deadline));
		taskRepository.save(todo1);
	}

	@Test
	public void findTaskByName() {
		List<Task> found = taskRepository.findTaskByTitle("Insomnia Test");
	}

}

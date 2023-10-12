package com.todo.tododatabase.repositories;

import com.todo.tododatabase.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
    Course findByName(String name);

    List<Course> findAllByUsername(String username);
}

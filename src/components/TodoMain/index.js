import React, { useState } from "react";
import TodoForm from "../TodoForm";
import TodoTaskContainer from "../TodoTaskContainer";
import { Container } from '@mui/material';

function TodoMain(props) {
    const [todos, setTodos] = useState([]);

    function createTask (task) {
        const newTask = [ ...todos, { task }];
        setTodos(newTask);
    }

    function deleteTask(index) {
        const newTask = [...todos];
        newTask.splice(index, 1)
        setTodos(newTask);
    }

    return (
        <Container>
            <TodoForm props={props} todos={[...todos]} createTask={createTask} deleteTask={deleteTask} />
            <TodoTaskContainer props={props} todos={[...todos]} deleteTask={deleteTask} />
        </Container>
    )
}

export default TodoMain;
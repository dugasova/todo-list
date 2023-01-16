import React from "react";
import TodoForm from "../TodoForm";
import TodoTaskContainer from "../TodoTaskContainer";
import { Container } from '@mui/material';
import { useSelector } from "react-redux";
import { createTask, deleteTask, setTaskCompleted } from "../../features/toDoSlice";

function TodoMain(props) {
    const tasks = useSelector((state) => state.reducer.tasks)

    return (
        <Container>
            <TodoForm props={props} createTask={createTask} />
            <TodoTaskContainer props={props} todos={[...tasks]} setTaskCompleted={setTaskCompleted} deleteTask={deleteTask} />
        </Container>
    )
}

export default TodoMain;

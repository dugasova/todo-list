import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const todoSlice = createSlice({
    name: "todoTasks",
    initialState,
    reducers: {
        createTask: (state, action) => {
            const newTask = {
                text: action.payload,
                isTaskcompleted: false
            };
            state.tasks.push(newTask)
        },
        deleteTask: (state, action) => {
            state.tasks.splice(action.payload, 1)
        },
        setTaskCompleted: (state, action) => {
            state.tasks[action.payload].isTaskcompleted = !state.tasks[action.payload].isTaskcompleted
        }

    }
});

export const { createTask, deleteTask, setTaskCompleted } = todoSlice.actions;
export default todoSlice.reducer;

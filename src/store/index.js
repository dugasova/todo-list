import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/toDoSlice";

export default configureStore({
    reducer: {
        reducer: todoReducer,
    },
});
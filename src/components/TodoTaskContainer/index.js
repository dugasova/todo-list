import React from "react";
import TodoTask from "../TodoTask";

function TodoTaskContainer({ todos, deleteTask, setTaskCompleted}) {
    return(
        <div>
            {todos.map( (todo, index) => {
                return <TodoTask key={index} index={index} todo={todo} setTaskCompleted={setTaskCompleted} deleteTask={deleteTask} />
            })}
        </div>
    )
};

export default TodoTaskContainer;

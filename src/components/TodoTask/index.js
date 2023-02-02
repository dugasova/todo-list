import React, { useState } from 'react';
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

function TodoTask({index, todo, value, completeTask, deleteTask}) {
    const [isTaskCompleted, setTaskCompleted] = useState(false)
    
    completeTask = (event) => {
        setTaskCompleted(!isTaskCompleted)
    }

    return (
        <List dense>
            <ListItem key={index} style={{ textDecoration : isTaskCompleted ? 'line-through' : 'none' }} disablePadding secondaryAction= {
                <IconButton edge="end"  onClick={() => deleteTask(index)}><DeleteIcon /></IconButton>
            }>
            <ListItemButton  edge="start" onClick={() => completeTask(index)}>
                <ListItemIcon>
                    <Checkbox  edge="start" checked={+isTaskCompleted}/>
                </ListItemIcon>
                <ListItemText id={index} primary={todo.task} />
            </ListItemButton>
            </ListItem>
        </List>
    )
}

export default TodoTask;
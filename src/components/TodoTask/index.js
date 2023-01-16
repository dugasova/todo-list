import React from 'react';
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useDispatch } from "react-redux";

function TodoTask({index, todo, setTaskCompleted, deleteTask}) {
    const dispatch = useDispatch()

    return (
        <List dense>
            <ListItem key={index} style={{ textDecoration : todo.isTaskcompleted ? 'line-through' : 'none' }} disablePadding secondaryAction= {
                <IconButton edge="end"  onClick={ () => dispatch(deleteTask(index))}><DeleteIcon /></IconButton>
            }>
            <ListItemButton  edge="start" onClick={() => dispatch(setTaskCompleted(index))}>
                <ListItemIcon>
                    <Checkbox  edge="start" checked={todo.isTaskCompleted}/>
                </ListItemIcon>
                <ListItemText id={index} primary={todo.text} />
            </ListItemButton>
            </ListItem>
        </List>
    )
}

export default TodoTask;

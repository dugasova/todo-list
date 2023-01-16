import React, {useState} from "react";
import { Button, TextField, FormControl} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from "react-redux";

function TodoForm({ createTask })  {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const onClick = (event) => {
        event.preventDefault();
        if(!value.trim())  {
            setValue("");
            return;
        };

        dispatch(createTask(value))
        setValue("");
    };

    return (
        <form >
            <FormControl fullWidth >
                <TextField fullWidth label="Todo Tasks" id="fullWidth" value={value} onChange={event => setValue(event.target.value)} 
                    InputProps={{
                        endAdornment: (<Button variant="contained" onClick={onClick} endIcon={<SendIcon />}>Submit</Button>)
                    }} />
            </FormControl>
        </form>
    )
}

export default TodoForm;

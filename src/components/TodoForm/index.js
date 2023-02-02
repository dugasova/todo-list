import React, {useState} from "react";
import { Button, TextField, FormControl} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function TodoForm({ createTask})  {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!value.trim())  { 
            return 
        };
        createTask(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth >
                <TextField fullWidth label="Todo Tasks" id="fullWidth" value={value} onChange={event => setValue(event.target.value)} 
                    InputProps={{
                        endAdornment: (<Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />}>Submit</Button>)
                    }} />
            </FormControl>
        </form>
    )
}

export default TodoForm;
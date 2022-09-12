import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {useEffect, useState} from "react";

function FormDialog() {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username'));

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateUsername = () => {
        localStorage.setItem('username', username);
    }

    useEffect(() => {
        if (localStorage.getItem('username') == null) {
            handleOpen();
        }
    },[]);

    return (
        <div>
            <h3>{username}</h3>
            <Button variant="outlined" onClick={handleOpen}>
                Change
            </Button>
            <Dialog open={open}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        value={username}
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setUsername(e.target.value) }}
                        required
                        placeholder="Enter your username"
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit" onClick={() => {handleClose(); updateUsername();}}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;
import * as React from 'react';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {getLocalUser, updateLocalId, updateLocalUsername, localUserExists} from "../localStore";

function FormDialog() {
    const [open, setOpen] = useState(false);

    const [usernameInput, setUsernameInput] = useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    useEffect(() => {
        if (localUserExists()) {
            const {username} = getLocalUser()
            onNameChange(username)
        } else {
            updateLocalId();
            handleOpen();
        }
    }, []);

    return (
        <div>
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
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setUsernameInput(e.target.value)
                        }}
                        required
                        placeholder="Enter your username"
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit" onClick={() => {
                        updateLocalUsername(usernameInput);
                        onNameChange(usernameInput)
                        handleClose();
                    }}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
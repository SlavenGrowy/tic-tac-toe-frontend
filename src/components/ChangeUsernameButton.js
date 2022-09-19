import * as React from 'react'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import { getLocalUser, updateLocalId, updateLocalUsername, localUserExists } from '../localStore'
import { updateHeartbeat } from '../api'
import { updateSessionId, updateSessionUsername } from '../sessionStore'

export const ChangeUsernameButton = ({ onNameChange }) => {
  const [open, setOpen] = useState(false)

  const [usernameInput, setUsernameInput] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const updateUserData = () => {
    updateLocalUsername(usernameInput)
    updateSessionUsername(usernameInput)
    onNameChange(usernameInput)
    updateHeartbeat(getLocalUser()).catch((e) => console.log(e))
  }

  useEffect(() => {
    if (localUserExists()) {
      const { username } = getLocalUser()
      onNameChange(username)
    } else {
      updateLocalId()
      updateSessionId()
      handleOpen()
    }
  }, [])

  return (
    <div>
      <Button variant='outlined' onClick={handleOpen}>
        Change
      </Button>
      <Dialog open={open}>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='username'
            label='Username'
            value={usernameInput}
            type='text'
            fullWidth
            variant='standard'
            onChange={(e) => {
              setUsernameInput(e.target.value)
            }}
            required
            placeholder='Enter your username'
          />
        </DialogContent>
        <DialogActions>
          <Button
            type='submit'
            onClick={() => {
              updateUserData()
              handleClose()
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

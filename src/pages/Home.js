import React, { useEffect, useState } from 'react'
import Players from '../components/Players'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ChangeUsernameButton } from '../components/ChangeUsernameButton'
import { updateHeartbeat } from '../api'
import { userHeartbeatInterval } from '../constants'
import { getLocalUser, localUserExists } from '../localStore'

export default function Home() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const updateUserHeartbeat = () => {
    if (localUserExists()) {
      const user = getLocalUser()
      updateHeartbeat(user).catch((e) => console.log(e))
    }
  }

  useEffect(() => {
    updateUserHeartbeat()
    const interval = setInterval(updateUserHeartbeat, userHeartbeatInterval)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='App'>
      <header>
        <h1>Tic-Tac-Toe</h1>
        <div className='user'>
          <h3>{username}</h3>
          <ChangeUsernameButton
            onNameChange={(newUsername) => {
              setUsername(newUsername)
            }}
          />
          <Button
            variant='contained'
            onClick={() => {
              navigate('/game')
            }}
          >
            Navigate to Game Screen
          </Button>
        </div>
      </header>
      <div className='content'>
        <Players />
      </div>
    </div>
  )
}

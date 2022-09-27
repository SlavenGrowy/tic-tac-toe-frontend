import React, { useEffect, useState } from 'react'
import Players from '../components/Players'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ChangeUsernameButton } from '../components/ChangeUsernameButton'
import { getStartedGame, sendHeartbeat } from '../api'
import { myGameFetchInterval, heartbeatInterval } from '../constants'
import { getLocalUser, localUserExists } from '../localStore'

export default function Home() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const updateUserHeartbeat = () => {
    if (localUserExists()) {
      const user = getLocalUser()
      sendHeartbeat(user).catch((e) => console.error(e))
    }
  }

  const pollForStartedGame = () => {
    const playerId = getLocalUser().id
    getStartedGame(playerId)
      .then((data) => {
        if (data) {
          navigate(`/game/${data.gameId}`)
        }
      })
      .catch((e) => console.error(e))
  }

  useEffect(() => {
    updateUserHeartbeat()
    const heartbeatIntervalId = setInterval(updateUserHeartbeat, heartbeatInterval)
    const gamedIntervalId = setInterval(pollForStartedGame, myGameFetchInterval)
    return () => {
      clearInterval(heartbeatIntervalId)
      clearInterval(gamedIntervalId)
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

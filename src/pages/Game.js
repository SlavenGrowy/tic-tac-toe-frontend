import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gameState, joinRoom } from '../socket-client.js'

function Game() {
  const { gameId } = useParams()

  useEffect(() => {
    joinRoom(gameId)
    gameState()
  }, [])

  return (
    <div className='App'>
      <header>
        <h1>Tic-Tac-Toe</h1>
        <div className='user'>
          <Button variant='contained' size='small'>
            Change
          </Button>
        </div>
      </header>
      <div className='content'>
        <p>Game Screen</p>
      </div>
    </div>
  )
}

export default Game

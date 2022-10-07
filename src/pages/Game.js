import { Button } from '@mui/material'
import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { joinRoom, playMove, offGameState, onGameState } from '../socketClient.js'
import { getLocalUser } from '../localStore'
import { X } from '../constants'

export const Game = () => {
  const { gameId } = useParams()

  const playMockMove = () => {
    console.log('Mock Move Played')
    playMove({
      gameId,
      player: getLocalUser().id,
      move: { piece: X, position: 5 },
    })
  }

  const callback = useCallback((gameState) => {
    console.log('GAME_STATE', gameState)
  }, [])

  useEffect(() => {
    onGameState(callback)
    joinRoom(gameId)
    return () => {
      offGameState(callback)
    }
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
        <Button variant='contained' size='small' onClick={playMockMove}>
          Play Mock Move
        </Button>
      </div>
    </div>
  )
}

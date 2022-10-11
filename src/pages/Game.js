import { Button } from '@mui/material'
import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { joinRoom, offGameState, onGameState } from '../socketClient.js'
import Board from '../components/Board'
import { mockGameStateEventArgs } from '../gameProtocol'
import Info from '../components/Info'

export const Game = () => {
  const { gameId } = useParams()

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
        <Board board={mockGameStateEventArgs.board} />
        <Info data={mockGameStateEventArgs} />
      </div>
    </div>
  )
}

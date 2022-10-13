import { Button } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { joinRoom, offGameState, onGameState, playMove } from '../socketClient.js'
import Board from '../components/Board'
import Info from '../components/Info'
import { getLocalUser } from '../localStore'
import { X } from '../constants'
import { mockGameStateEventArgs } from '../gameProtocol'

export const Game = () => {
  const [board, setBoard] = useState([mockGameStateEventArgs.board])
  const [info, setInfo] = useState({ players: ['', ''], playerTurn: '' })

  const playMockMove = () => {
    console.log('Mock Move Played')
    playMove({
      gameId,
      player: getLocalUser().id,
      move: { piece: X, position: 5 },
    })
  }
  const { gameId } = useParams()

  const callback = useCallback((gameState) => {
    console.log('GAME_STATE', gameState)
    setBoard(gameState.board)
    setInfo({ players: gameState.players, playerTurn: gameState.playerTurn })
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
      <div className='boardDisplay'>{board && <Board board={board} />}</div>
      <div className='infoDisplay'>{info && <Info data={info} />}</div>
    </div>
  )
}

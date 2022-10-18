import { Button } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { joinRoom, offGameState, onGameState, playMove } from '../socketClient.js'
import Board from '../components/Board'
import Info from '../components/Info'
import { getLocalUser } from '../localStore'
import { mockGameStateEventArgs } from '../gameProtocol'

export const Game = () => {
  const [board, setBoard] = useState([mockGameStateEventArgs.board])
  const [info, setInfo] = useState({ players: ['', ''], playerTurn: '' })
  const { gameId } = useParams()

  const callback = useCallback(({ board, players, playerTurn }) => {
    setBoard(board)
    setInfo({ players, playerTurn })
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
      <div className='boardDisplay'>
        {board && (
          <Board
            board={board}
            movePlayed={(btnIndex) => {
              const [firstPlayer, secondPlayer] = info.players
              const piece = firstPlayer.id === getLocalUser().id ? firstPlayer.piece : secondPlayer.piece
              playMove({
                gameId,
                playerId: getLocalUser().id,
                move: { piece, position: btnIndex },
              })
            }}
          />
        )}
      </div>
      <div className='infoDisplay'>{info && <Info data={info} />}</div>
    </div>
  )
}

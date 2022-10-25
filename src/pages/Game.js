import { Alert, Button } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { joinRoom, offGameState, onGameState, playMove } from '../socketClient.js'
import Board from '../components/Board'
import Info from '../components/Info'
import { getLocalUser } from '../localStore'
import { mockGameStateEventArgs } from '../gameProtocol'
import { GAME_STATUS } from '../constants'

export const Game = () => {
  const [board, setBoard] = useState([mockGameStateEventArgs.board])
  const [info, setInfo] = useState({ players: ['', ''], playerTurn: '' })
  const [winner, setWinner] = useState('')
  const [isFinished, setFinished] = useState(true)
  const { gameId } = useParams()
  const navigate = useNavigate()

  const callback = useCallback(({ board, players, playerTurn, state, winner }) => {
    setBoard(board)
    setInfo({ players, playerTurn })
    setFinished(state === GAME_STATUS.FINISHED)
    setWinner(winner)
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
      </header>
      <br />
      <div className='finishedGame'>
        {isFinished && winner != null && (
          <Alert severity='success'>{winner === info.players[0].id ? info.players[0].username : info.players[1].username} won! 🎉</Alert>
        )}
        {isFinished && winner == null && <Alert severity='info'>The game is a draw, or Stalemate!</Alert>}
      </div>
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
      <div className='button'>
        {isFinished && (
          <Button
            onClick={() => {
              navigate('/')
            }}
          >
            Navigate to home screen
          </Button>
        )}
      </div>
    </div>
  )
}

import React from 'react'
import { Button } from '@mui/material'
import { printPiece } from '../util'

const Board = ({ board, movePlayed }) => {
  const buttons = Array(9).fill(9)

  return (
    <div className='board'>
      {buttons.map((cell, cellIndex) => (
        <Button key={cellIndex} id='board-btn' className='boardButtons' onClick={() => movePlayed(cellIndex)}>
          {printPiece(board[cellIndex])}
        </Button>
      ))}
    </div>
  )
}

export default Board

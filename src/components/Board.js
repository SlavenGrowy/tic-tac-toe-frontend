import React from 'react'
import BoardButton from './BoardButton'

const Board = (props) => {
  const board = [
    [props.board[0], props.board[1], props.board[2]],
    [props.board[3], props.board[4], props.board[5]],
    [props.board[6], props.board[7], props.board[8]],
  ]

  return (
    <div className='board'>
      {board.map((row, indexRow) => (
        <div className='row'>
          {row.map((piece, indexPiece) => (
            <BoardButton index={+('' + indexRow + indexPiece)} piece={piece} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board

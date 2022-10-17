import { Button } from '@mui/material'
import { printPiece } from '../util'

const BoardButton = (props) => {
  const index = props.index
  const piece = props.piece
  return (
    <Button key={index} id='board-btn' className='boardButtons' sx=''>
      {printPiece(piece)}
    </Button>
  )
}

export default BoardButton

import { Button } from '@mui/material'
import { printPiece } from '../util'

const BoardButton = (props) => {
  const index = props.index
  const piece = props.piece
  return (
    <Button id={index} className='boardButtons' sx='font-size: 50px; background-color: #abcdef; margin: 2px'>
      {printPiece(piece)}
    </Button>
  )
}

export default BoardButton

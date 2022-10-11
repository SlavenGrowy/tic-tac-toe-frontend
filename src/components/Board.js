import React from 'react'
import { Box, Button, Grid } from '@mui/material'

const printPiece = (piece) => {
  switch (piece) {
    case 0:
      return 'O'
    case 1:
      return 'X'
    case 9:
      return ''
  }
}

function FormRow(props) {
  return (
    <React.Fragment>
      <Grid padding='2px' item>
        <Button className='boardButtons' sx='font-size: 50px; background-color: #abcdef'>
          {printPiece(props.board[0])}
        </Button>
      </Grid>
      <Grid padding='2px' item>
        <Button className='boardButtons' sx='font-size: 50px; background-color: #abcdef'>
          {printPiece(props.board[1])}
        </Button>
      </Grid>
      <Grid padding='2px' item>
        <Button className='boardButtons' sx='font-size: 50px; background-color: #abcdef'>
          {printPiece(props.board[2])}
        </Button>
      </Grid>
    </React.Fragment>
  )
}

const Board = (props) => {
  return (
    <div className='board'>
      <Box>
        <Grid container>
          <Grid container item>
            <FormRow board={[props.board[0], props.board[1], props.board[2]]} />
          </Grid>
          <Grid container item>
            <FormRow board={[props.board[3], props.board[4], props.board[5]]} />
          </Grid>
          <Grid container item>
            <FormRow board={[props.board[6], props.board[7], props.board[8]]} />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Board

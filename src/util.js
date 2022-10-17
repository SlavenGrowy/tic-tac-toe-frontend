import { X, O, EMPTY } from './constants'

export const printPiece = (piece) => {
  switch (piece) {
    case O:
      return 'O'
    case X:
      return 'X'
    case EMPTY:
      return ''
  }
}

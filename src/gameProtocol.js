import { GAME_STATUS } from './constants.js'

const X = 1
const O = 0
const EMPTY = 9

export const gameStateEventArgs = {
  id: '',
  players: [
    { id: '', username: '', piece: X },
    { id: '', username: '', piece: O },
  ],
  playerTurn: '',
  state: GAME_STATUS.STARTED,
  board: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
}

export const movePlayedEventArgs = {
  player: '',
  move: { piece: '', position: '' },
}

import { EMPTY, GAME_STATUS, O, X } from './constants.js'

export const mockGameStateEventArgs = {
  id: '',
  players: [
    { id: '', username: '', piece: X },
    { id: '', username: '', piece: O },
  ],
  playerTurn: '',
  state: GAME_STATUS.STARTED,
  board: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  winner: null,
}

export const mockMovePlayedEventArgs = {
  gameId: '',
  playerId: '',
  move: { piece: X, position: 5 },
}

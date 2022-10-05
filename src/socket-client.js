import { GAME_STATE, JOIN_ROOM, MOVE_PLAYED, socket } from './constants'
import { movePlayedEventArgs } from './gameProtocol.js'

export const joinRoom = (roomId) => {
  socket.emit(JOIN_ROOM, roomId)
}

export const gameState = () => {
  socket.on(GAME_STATE, (gameStateEventArgs) => {
    //TODO: use a method for updating game state
  })
}

export const movePlayed = () => {
  socket.emit(MOVE_PLAYED, movePlayedEventArgs)
}

import { GAME_STATE, JOIN_ROOM, MOVE_PLAYED, SOCKET } from './constants'
import { movePlayedEventArgs } from './gameProtocol.js'

export const joinRoom = (roomId) => {
  SOCKET.emit(JOIN_ROOM, roomId)
}

export const gameState = () => {
  SOCKET.on(GAME_STATE, (gameStateEventArgs) => {
    //TODO: use a method for updating game state
  })
}

export const movePlayed = () => {
  SOCKET.emit(MOVE_PLAYED, movePlayedEventArgs)
}

import { GAME_STATE, JOIN_ROOM, MOVE_PLAYED } from './constants'
import { mockMovePlayedEventArgs } from './gameProtocol.js'
import { io } from 'socket.io-client'

const socket = io('http://localhost:8086/game')

export const joinRoom = (roomId) => {
  socket.emit(JOIN_ROOM, roomId)
}

export const gameState = () => {
  socket.on(GAME_STATE, (gameStateEventArgs) => {
    //TODO: use a method for updating game state
  })
}

export const movePlayed = () => {
  socket.emit(MOVE_PLAYED, mockMovePlayedEventArgs)
}

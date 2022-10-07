import { GAME_SOCKET_URL, GAME_STATE, JOIN_ROOM, MOVE_PLAYED } from './constants'
import { io } from 'socket.io-client'

const socket = io(GAME_SOCKET_URL)

export const joinRoom = (roomId) => {
  socket.emit(JOIN_ROOM, roomId)
}

export const onGameState = (listener) => {
  socket.on(GAME_STATE, listener)
}

export const offGameState = (listener) => {
  socket.off(GAME_STATE, listener)
}

export const playMove = (mockMovePlayedEventArgs) => {
  socket.emit(MOVE_PLAYED, mockMovePlayedEventArgs)
}

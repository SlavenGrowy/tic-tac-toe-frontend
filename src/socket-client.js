import { io } from 'socket.io-client'
import { JOIN_ROOM } from './constants'

const socket = io('http://localhost:8086/game')

export const joinRoom = (roomId) => {
  socket.emit(JOIN_ROOM, roomId)
}

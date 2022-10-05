import { io } from 'socket.io-client'

export const userFetchInterval = 3 * 1000
export const heartbeatInterval = 15 * 1000
export const myGameFetchInterval = 3 * 1000
export const gameStatus = {
  STARTED: 'STARTED',
  FINISHED: 'FINISHED',
}
export const JOIN_ROOM = 'join_room'
export const GAME_STATE = 'game_state'
export const MOVE_PLAYED = 'move_played'
export const socket = io('http://localhost:8086/game')

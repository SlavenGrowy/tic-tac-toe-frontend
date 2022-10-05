import { io } from 'socket.io-client'

export const USER_FETCH_INTERVAL = 3 * 1000
export const HEARTBEAT_INTERVAL = 15 * 1000
export const GAME_FETCH_INTERVAL = 3 * 1000
export const GAME_STATUS = {
  STARTED: 'STARTED',
  FINISHED: 'FINISHED',
}
export const JOIN_ROOM = 'join_room'
export const GAME_STATE = 'game_state'
export const MOVE_PLAYED = 'move_played'
export const SOCKET = io('http://localhost:8086/game')

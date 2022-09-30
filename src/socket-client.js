import { io } from 'socket.io-client'

const socket = io('http://localhost:8086/game')

socket.on('test', (message) => {
  console.log(message)
})

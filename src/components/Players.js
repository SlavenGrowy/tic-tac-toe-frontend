import React, { useEffect, useState } from 'react'
import { fetchOnlineUsers } from '../api'
import { userFetchInterval } from '../constants'

const Players = () => {
  const [onlineUsers, setOnlineUsers] = useState([])

  useEffect(() => {
    updateOnlineUsersList().catch(e => console.error(e))
    const interval = setInterval(updateOnlineUsersList, userFetchInterval)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const updateOnlineUsersList = async () => {
    const fetchedOnlineUsers = await fetchOnlineUsers()
    setOnlineUsers(Object.values(fetchedOnlineUsers))
  }

  return (
    <div className='players'>
      <h2>Online Players HERE</h2>
      <ul>
        {onlineUsers.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  )
}

export default Players

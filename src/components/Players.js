import React, { useEffect, useState } from 'react'
import { createGame, fetchOnlineUsers } from '../api'
import { userFetchInterval } from '../constants'
import { getLocalUser } from '../localStore'
import { List, ListItemButton, ListItemText } from '@mui/material'

const Players = () => {
  const [onlineUsers, setOnlineUsers] = useState([])

  useEffect(() => {
    updateOnlineUsersList().catch((e) => console.error(e))
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
      <List>
        {onlineUsers.map((user) => (
          <ListItemButton
            key={user.id}
            onClick={async () => {
              const localUserId = getLocalUser().id
              const invitedUserId = user.id
              if (localUserId !== invitedUserId) await createGame([localUserId, invitedUserId])
            }}
          >
            <ListItemText primary={user.username} />
          </ListItemButton>
        ))}
      </List>
    </div>
  )
}

export default Players

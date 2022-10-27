import React, { useEffect, useState } from 'react'
import { createGame, fetchOnlineUsers } from '../api'
import { USER_FETCH_INTERVAL } from '../constants'
import { getLocalUser } from '../localStore'
import { List, ListItemButton, ListItemText } from '@mui/material'

const Players = () => {
  const [onlineUsers, setOnlineUsers] = useState([])

  useEffect(() => {
    updateOnlineUsersList().catch((e) => console.error(e))
    const interval = setInterval(updateOnlineUsersList, USER_FETCH_INTERVAL)
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
      <h2>Online Players</h2>
      <List>
        {onlineUsers.map((user) => (
          <ListItemButton
            style={{ alignItems: 'center', textAlign: 'center', border: '3px solid #abcdef', borderRadius: '50px' }}
            key={user.id}
            onClick={async () => {
              const localUserId = getLocalUser().id
              const invitedUserId = user.id
              if (localUserId !== invitedUserId) createGame([localUserId, invitedUserId]).catch((e) => console.error(e))
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

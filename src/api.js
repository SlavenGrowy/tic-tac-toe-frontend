export const fetchOnlineUsers = async () => {
  const response = await fetch('/online-users')
  return await response.json()
}

export const sendHeartbeat = async (user) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }
  return await fetch('/heartbeat', requestOptions)
}

export const getStartedGame = async (playerId) => {
  const response = await fetch(`/my-started-game?playerId=${playerId}`)

  if (response.status === 404) {
    console.log('NOT FOUND started game')
    return []
  }

  const games = await response.json()
  return games[0]
}

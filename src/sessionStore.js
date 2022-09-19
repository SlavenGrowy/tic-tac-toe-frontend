const usernameKey = 'username'
const idKey = 'id'

export const updateSessionId = () => {
  sessionStorage.setItem(idKey, localStorage.getItem(idKey))
}

export const updateSessionUsername = (username) => {
  sessionStorage.setItem(usernameKey, username)
}

export const getSessionUser = () => {
  const id = sessionStorage.getItem(idKey)
  const username = sessionStorage.getItem(usernameKey)
  return { id, username, heartbeat: new Date().getTime() }
}

export const sessionUserExists = () => {
  const id = sessionStorage.getItem(idKey)
  const username = sessionStorage.getItem(usernameKey)

  return id !== null || username !== null
}

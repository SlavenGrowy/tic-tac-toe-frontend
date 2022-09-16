export const fetchOnlineUsers = async () => {
  const response = await fetch('/online-users')
  return await response.json()
}

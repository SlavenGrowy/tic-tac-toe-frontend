export const fetchOnlineUsers = async () => {
    const response = await fetch("/online-users");
    return await response.json();
}

export const sendHeartbeat = async () => {
    // axios.post("/heartbeat", user).then(response => {
    //     console.log(response.data);
    // }).catch(e => console.log(e));
    // TODO replace with fetch 👆remove axios from deps
}

import React, {useEffect, useState} from "react";
import {fetchOnlineUsers} from "../api";
import {userFetchInterval} from "../constants";

const Players = () => {

    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        console.log('Fetching online players')
        setInterval(updateOnlineUsersList, userFetchInterval)
    //     Todo clear interval☝️
    }, []);

    const updateOnlineUsersList = (async () => {
        const fetchedOnlineUsers = await fetchOnlineUsers();
        setOnlineUsers(Object.values(fetchedOnlineUsers));
    });

    return (
        <div className="players">
            <h2>Online Players HERE</h2>
            <ul>
                {onlineUsers.map((user) => (<li key={user.id}>{user.username}</li>))}
            </ul>
        </div>
    )
}

export default Players;
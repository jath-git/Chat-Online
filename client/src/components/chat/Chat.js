import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const port = 5000;
let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const endpoint = `localhost:${port}`;

    useEffect(() => {
        setRoom(location.search.substring(location.search.indexOf('&') + 6));

        socket = io(endpoint, { transports: ['websocket'] });
        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect');
        //    socket.off();
        };
    }, [endpoint, location.search]);
    return (
        <h1>Chat</h1>
    )
}

export default Chat;
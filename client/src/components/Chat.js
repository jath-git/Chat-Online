import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import InfoBar from './InfoBar.js';
import Input from './Input.js'
import Messages from './Messages.js'
import './Chat.css';
import './global.css';

const port = 5000;   
let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);
    const endpoint = `localhost:${port}`;

    useEffect(() => {
        setName(location.search.substring(6, location.search.indexOf('&')));
        setRoom(location.search.substring(location.search.indexOf('&') + 6));

        socket = io(endpoint, { transports: ['websocket'] });
        socket.emit('join', { name, room }, () => {

        });

        return () => {
            //   socket.emit('disconnect');
            socket.off();
        };
    }, [endpoint, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = event => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="outer">
            <div className="chatInner">
                <InfoBar room={room} />
                <Messages messages={messages} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat;
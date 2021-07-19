import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import InfoBar from './InfoBar.js';
import Messages from './Messages.js';
import Input from './Input.js';
import './Chat.css';

const port = 5000;
// const ENDPOINT = 'https://project-chat-online-app.herokuapp.com/';
const endpoint = `localhost:${port}`;
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [temp, setUsers] = useState('');

  useEffect(() => {
    setName(location.search.substring(6, location.search.indexOf('&')));
    setRoom(location.search.substring(location.search.indexOf('&') + 6));

    socket = io(endpoint, { transports: ['websocket'] });

    socket.emit('join', { name, room }, error => {
      if (error)
        alert(error);
    });
  }, [endpoint, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    }, [messages]);

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="chatOuter">
      <div className="chatInner">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;

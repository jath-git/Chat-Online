const express = require('express');
const http = require('http');
const cors = require('cors');
const socketio = require('socket.io');

const port = 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./router');

io.on('connection', socket => {
    socket.on('join', ({ name, room }, onJoin) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        if (error) {
            return onJoin(error);
        }

        socket.emit('message', { user: 'admin', test: `${user.name}, welcome to the room, ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user })
        socket.join(user.room);
        onJoin();
    });

    socket.join('sendMessage', (message, onJoin) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message });
        onJoin();
    });


    socket.on('disconnect', () => {
        console.log('user left');
    });
});

// import requests from middleware
app.use(router);
app.use(cors());

// boot server
server.listen(port, () => console.log('server is running on ' + port));

const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if(!name || !room) return { error: 'Username and room are required.' };
  if(existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);
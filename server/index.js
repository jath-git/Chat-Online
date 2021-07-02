const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const port = 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./router');

io.on('connection', socket => {
    console.log('we have a new connection');

    socket.on('join', ({ name, room }, onJoin) => {
        console.log(name, room);
    });
    socket.on('disconnect', () => {
        console.log('user had left');
    });
});

// import requests from middleware
app.use(router);

// boot server
server.listen(port, () => console.log('server is running on ' + port));
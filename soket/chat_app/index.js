const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Server Socket connected'); // (2)

  socket.on('sendMsg', (msg) => {
    console.log('서버서 메세지 받음 :', msg);
    socket.emit('sendMsg', msg);
  });

  socket.on('disconnect', () => {
    console.log('Server Socket disconnected');
  });
});

http.listen(8000, () => {
  console.log('Sever port : ', 8000);
});

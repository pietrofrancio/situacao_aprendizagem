// backend: server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', socket => {
  console.log('Usuário conectado');

  socket.on('mensagem', msg => {
    console.log('Mensagem recebida do front:', msg);
    socket.emit('resposta', `Backend respondeu: ${msg}`);
  });
});

server.listen(3000);




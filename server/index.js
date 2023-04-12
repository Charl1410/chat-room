const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
// const path = require('path');
const { Server } = require("socket.io");

app.use(cors()); // Add cors middleware

const server = http.createServer(app);

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const CHAT_BOT = "ChatBot";

let chatRoom = '';
let allUsers = [];

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("join_room", (data) => {
    const { username, room } = data;
    socket.join(room);

    let __createdtime__ = Date.now();
    socket.to(room).emit("receive_message", {
      message: `${username} has joined the room!`,
      username: CHAT_BOT,
      __createdtime__,
      message: `Welcome ${username} ! `,
      __createdtime__,
    });
  });
});

server.listen(4000, () => "Server running onport 3000");

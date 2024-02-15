const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  console.log("a user connected");
  socket.on("chat message", function (msg) {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
  // console.log(socket.rooms); //Set { <socket.id> }
  // socket.join("room1");
  // console.log(socket.rooms); // Set { <socket.id>, "room1" }
});

server.listen(3000, function () {
  console.log("listening on *:3000");
});

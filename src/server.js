const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const listGamesController = require("./controllers/listGamesController");
const addGameController = require("./controllers/addGameController");

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/games/:id?", listGamesController);
server.post("/games", addGameController);

mongoose
  .connect(
    "mongodb+srv://tony:UIgsLP1y7PTRHPv6@gameserver.h0qzu.mongodb.net/gamesDB?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
    server.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

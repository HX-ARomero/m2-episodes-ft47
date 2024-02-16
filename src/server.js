const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const homeRouter = require("./routes/homeRouter.js");
const userRouter = require("./routes/userRouter.js");
const episodeRouter = require("./routes/episodeRouter.js");

const server = express();

//* Middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/", homeRouter);
server.use("/user", userRouter);
server.use("/episode", episodeRouter);

module.exports = server;
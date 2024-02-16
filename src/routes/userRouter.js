const { Router } = require("express");
const { getUser } = require("../controllers/userController.js");
const userRouter = Router();

userRouter.get("/", getUser);

module.exports = userRouter;
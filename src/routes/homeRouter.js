const { Router } = require("express");
const { getHome } = require("../controllers/homeController.js");
const homeRouter = Router();

homeRouter.get("/", getHome);

module.exports = homeRouter;
const { Router } = require("express");
const { getEpisode } = require("../controllers/episodeController.js");

const episodeRouter = Router();

episodeRouter.get("/", getEpisode);

module.exports = episodeRouter;
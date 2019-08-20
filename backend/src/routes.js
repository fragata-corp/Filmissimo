const express = require("express");
const FilmeController = require("./controllers/FilmeController");
const routes = express.Router();
routes.get("/filmes", FilmeController.index);
routes.post("/filmes", FilmeController.store);
module.exports = routes;

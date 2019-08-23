const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

const FilmeController = require("./controllers/FilmeController");
const FileController = require("./controllers/FileController");

routes.post("/filmes", FilmeController.store);
routes.get("/filmes/:id", FilmeController.show);
routes.post(
  "/filmes/:id/files",
  multer(multerConfig).single("file"),
  FileController.store
);
module.exports = routes;

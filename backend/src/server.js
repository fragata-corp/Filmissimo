const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();
//os dados user e passord são ficticios... procure os verdadeiros na sua conta do mogo db atlas
mongoose
  .connect("mongodb://mongodb/filmissimo", { useNewUrlParser: true })
  .then(() => {
    console.log("#############################################");
    console.log("Connected to MongoDB");
    console.log("#############################################");
  })
  .catch(err => {
    console.log("#############################################");
    console.log(err);
    console.log("#############################################");
    process.exit(1); //quit the process
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/filmes", express.static(path.resolve(__dirname, "..", "tmp")));
app.use(require("./routes"));

app.listen(4000, () => {
  console.log("#############################################");
  console.log("NodeJS and Express Strated.");
  console.log("#############################################");
});

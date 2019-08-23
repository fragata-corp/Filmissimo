const mongoose = require("mongoose");

const Filme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    files: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Filme", Filme);

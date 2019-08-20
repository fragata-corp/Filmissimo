const { Schema, model } = require("mongoose");

const FilmeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    bio: String,
    avatar: {
      type: String,
      required: true
    },
    likes: [
      {
        type: Schema.Types.ObjectId /*refernciando ao usuario com id no mongo*/,
        ref: "Filme"
      }
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId /*refernciando ao usuario com id no mongo*/,
        ref: "Filme"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = model("Filme", FilmeSchema);

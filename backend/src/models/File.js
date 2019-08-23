const mongoose = require("mongoose");

const File = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },

    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
  },
  {
    timestamps: true,
    toObject:{virtuals: true},
    toJSON:{virtuals: true}
  }
);

File.virtual("url").get(function(){
  return `http://localhost:3001/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);

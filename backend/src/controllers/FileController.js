const Filme = require("../models/Filme");
const File = require("../models/File");

class FileController {
  async store(req, res) {
    const filme = await Filme.findById(req.params.id);

    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key
    });

    filme.files.push(file);

    await filme.save();

    return res.json(file);
  }
}

module.exports = new FileController();

const Filme = require("../models/Filme");

class FilmeController {
  async store(req, res) {
    const filme = await Filme.create({ title: req.body.title });
    return res.json(filme);
  }

  async show(req, res) {
    const filme = await Filme.findById(req.params.id );

    return res.json(filme);
  }
}

module.exports = new FilmeController();

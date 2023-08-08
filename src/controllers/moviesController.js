const db = require("../database/models")

const moviesController = {
    'list': (req, res) => {
        // Do the magic
        db.movies.findAll("")
        .then((resultado) => {
            res.send(resultado);
        })
        .catch((error) => {
            res.send(error)
        })
    },
    'detail': (req, res) => {
        // Do the magic
        res.send("Detalle de la pelicula con id " + req.params.id)
    },
    'new': (req, res) => {
        // Do the magic
        res.send("Peliculas nuevas")
    },
    'recomended': (req, res) => {
        // Do the magic
        res.send("Peliculas recomendadas")
    }
}

module.exports = moviesController;

var router = require("express").Router();

const movies = require('../controllers/moviesController');
const { route } = require("./auth");

router.get("/movies", movies.getAllRepositories)
router.get("/movies/:idmovie",movies.findRepositorieId)

module.exports = router;
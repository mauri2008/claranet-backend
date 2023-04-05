
var router = require("express").Router();

const auth = require('../controllers/authController');


router.post("/auth", auth.post);

module.exports = router;
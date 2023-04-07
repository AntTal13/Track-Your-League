const express = require('express');
const router = express.Router();

const gamesCtrl = require('../controllers/games');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /games
router.get('/games', ensureLoggedIn, gamesCtrl.index);


module.exports = router;
const express = require('express');
const router = express.Router();

const gamesCtrl = require('../controllers/games');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /games
router.get('/games', ensureLoggedIn, gamesCtrl.index);
// POST /games (create functionality)
router.post('/games', ensureLoggedIn, gamesCtrl.create);
// POST
router.post('/games/some', ensureLoggedIn, gamesCtrl.getSome);
// DELETE /players/:id
router.delete('/games/:id', ensureLoggedIn, gamesCtrl.delete);

module.exports = router;
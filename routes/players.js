const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /performers/new (new functionality)
router.get('/players/new', ensureLoggedIn, playersCtrl.new);
// POST /performers (create functionality)
router.post('/players', ensureLoggedIn, playersCtrl.create);
// POST /movies/:id/players 
router.post('/teams/:id/players', ensureLoggedIn, playersCtrl.addToRoster);
// DELETE /players/:id
router.delete('/players/:id', ensureLoggedIn, playersCtrl.delete);

module.exports = router;
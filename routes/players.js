const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /players/new (new functionality)
router.get('/players/new', ensureLoggedIn, playersCtrl.new);
// POST /players (create functionality)
router.post('/players', ensureLoggedIn, playersCtrl.create);
// POST /teams/:id/players 
router.post('/teams/:id/players', ensureLoggedIn, playersCtrl.addToRoster);
// GET /players/:id/edit
router.get('/players/:id/edit', ensureLoggedIn, playersCtrl.edit);
// DELETE /players/:id
router.delete('/players/:id', ensureLoggedIn, playersCtrl.delete);
// PUT /players/:id
router.put('/players/:id', ensureLoggedIn, playersCtrl.update);

module.exports = router;
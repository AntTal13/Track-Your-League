const express = require('express');
const router = express.Router();

const teamsCtrl = require('../controllers/teams');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /teams
router.get('/', ensureLoggedIn, teamsCtrl.index);
// GET /teams/new
router.get('/new', ensureLoggedIn, teamsCtrl.new);
// GET /teams/:id 
router.get('/:id', teamsCtrl.show);
// POST /teams
router.post('/', ensureLoggedIn, teamsCtrl.create);

module.exports = router;
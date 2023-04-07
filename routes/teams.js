const express = require('express');
const router = express.Router();

const teamsCtrl = require('../controllers/teams');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /teams
router.get('/', ensureLoggedIn, teamsCtrl.index);

module.exports = router;
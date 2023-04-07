const express = require('express');
const router = express.Router();

const teamStandingsCtrl = require('../controllers/standings');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /teamstandings
router.get('/teamstandings', ensureLoggedIn, teamStandingsCtrl.index);


module.exports = router;
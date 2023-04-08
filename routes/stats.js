const express = require('express');
const router = express.Router();

const statsCtrl = require('../controllers/stats');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /stats
router.get('/stats', ensureLoggedIn, statsCtrl.index);


module.exports = router;
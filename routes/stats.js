const express = require('express');
const router = express.Router();

const statsCtrl = require('../controllers/stats');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /stats
router.get('/stats/:id', ensureLoggedIn, statsCtrl.show);


module.exports = router;
const express = require('express');
const router = express.Router();

const statsCtrl = require('../controllers/stats');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /stats/:id
router.get('/stats/:id', ensureLoggedIn, statsCtrl.show);
//POST /stats
router.post('/stats/:id', ensureLoggedIn, statsCtrl.create);


module.exports = router;
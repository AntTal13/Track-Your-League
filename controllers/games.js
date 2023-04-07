const Team = require('../models/team');
const Game = require('../models/game');

module.exports = {
  index
};

async function index(req, res) {
  const games = await Game.find({});
  res.render('games/index', { title: 'My Games', games });
}
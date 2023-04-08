const Team = require('../models/team');
const Game = require('../models/game');

module.exports = {
  index,
  create,
  addToGames,
  delete: deleteGame
};

async function index(req, res) {
  const games = await Game.find({});
  res.render('games/index', { title: 'My Games', games });
}

async function deleteGame(req, res) {
    const game = await Game.findOne({ 'games._id': req.params.id, 'games.user': req.user._id });
    if (!game) return res.redirect('/games');
    game.remove(req.params.id);
    await game.save();
    res.redirect(`/games`);
}

async function addToGames(req, res) {
    const game = await Game.findById(req.params.id);
    game.push(req.body);
    await game.save();
    res.redirect(`/games`);
}

async function create(req, res) {
  req.body.born += 'T00:00';
  try {
    await Game.create(req.body);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

  } catch (err) {
    console.log(err);
  }
  res.redirect('/games');
}
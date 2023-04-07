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
    // const team = await Team.findOne({ 'players._id': req.params.id, 'players.user': req.user._id });
    // if (!team) return res.redirect('/teams');
    // team.players.remove(req.params.id);
    // await team.save();
    // res.redirect(`/teams/${team._id}`);
}

async function addToGames(req, res) {
    const team = await Team.findById(req.params.id);
    // The cast array holds the performer's ObjectId (referencing)
    team.games.push(req.body.gameId);
    await team.save();
    res.redirect(`/games`);
}

async function create(req, res) {
  req.body.born += 'T00:00';
  try {
    await Game.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/games');
}
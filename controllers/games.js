const Team = require('../models/team');
const Game = require('../models/game');
const User = require('../models/user');
const Player = require('../models/player');


module.exports = {
  index,
  create,
  delete: deleteGame,
  getSome
};

async function getSome(req, res) {
    const teams = await Team.find({});
    const team = await Team.find({_id: req.body.teamId}).populate('games');
    res.render('games/index', { title: 'My Games', team: teams, games: team[0].games });
}

async function index(req, res) {
  const games = await Game.find({}).populate('user').sort('name');
  const team = await Team.find({});
  res.render('games/index', { title: 'My Games', games, team });
}

async function deleteGame(req, res) {
    const game = await Game.findById(req.params.id)
    await Game.deleteOne(game)
    
    const team = await Team.findOne({ 'games': game });
    team.games.remove(game);
    await team.save();
    
    res.redirect(`/games`);
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    
    const game = await Game.create(req.body);
    const team = await Team.findById(req.body.teamId);
    
    team.games.push(game._id);
    await team.save();

  } catch (err) {
    console.log(err);
  }
  res.redirect('/games');
}
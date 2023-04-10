const Team = require('../models/team');
const Game = require('../models/game');
const User = require('../models/user');

module.exports = {
  index,
  create,
  //addToGames,
  delete: deleteGame
};

async function index(req, res) {
  const games = await Game.find({}).populate('user');
  const team = await Team.find({});
  res.render('games/index', { title: 'My Games', games, team });
}

async function deleteGame(req, res) {
    // const game = await Game.findOne({ 'games._id': req.params.id, 'games.user': req.user._id });
    // if (!game) return res.redirect('/games');
    // game.remove(req.params.id);
    const game = await Game.findById(req.params.id)
    await Game.deleteOne(game)
    // await game.save();
    res.redirect(`/games`);
}

// Controller Delete by ID around form 
// <% if (user?._id.equals(g.user)) { %>
// <% } %>

async function create(req, res) {
  req.body.born += 'T00:00';
  try {
    const game = await Game.create(req.body);
    const team = await Team.findById(req.body.teamId);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    game.user.push(req.body.user);
    await game.save()
    
    team.games.push(game._id);
    await team.save();

  } catch (err) {
    console.log(err);
  }
  res.redirect('/games');
}
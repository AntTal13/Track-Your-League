const Team = require('../models/team');
const Player = require('../models/player');
const Game = require('../models/game');
const Stat = require('../models/stat');


module.exports = {
    show
};
  
async function show(req, res) {
    const game = await Game.findById(req.params.id);
    const team = await Team.findOne({ 'games': game }).populate('players');
    const players = await Player.find({ _id: { $nin: team.players } }).populate('stats').sort('name');
    res.render('stats/show', { title: 'Game Stats', game, team, players });
}
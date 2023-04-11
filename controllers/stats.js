const Team = require('../models/team');
const Player = require('../models/player');
const Game = require('../models/game');
const Stat = require('../models/stat');


module.exports = {
    show,
    create
};
  
async function create(req, res) {
    const game = await Game.findById(req.params.id).populate('boxScore');;
    const team = await Team.findOne({ 'games': game }).populate('players');
    const players = await Player.find({ _id: { $nin: team.players } }).populate('stats').sort('name');
    // New below
    const newStat = {
        stat: {
            points: req.body.points,
            assists: req.body.assists,
            rebounds: req.body.rebounds,
        }
    }

    players.stats.push(newStat.stat)
    game.boxScore.push(newStat.stat)
    console.log(newStat, 'Hello')
    // New above
    res.render('stats/show', { title: 'Game Stats', game, team, players });
}

async function show(req, res) {
    const game = await Game.findById(req.params.id);
    const team = await Team.findOne({ 'games': game }).populate('players');
    const players = await Player.find({ _id: { $nin: team.players } }).populate('stats').sort('name');
    res.render('stats/show', { title: 'Game Stats', game, team, players });
}
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
    const player = await Player.findById(req.body.playerId).populate('stats').sort('name');
    const stats = await Stat.find({ 'game': game }).populate('player');

    // New below
    const newStat = {
        player: req.body.playerId,
        game: req.params.id,
        points: req.body.points,
        assists: req.body.assists,
        rebounds: req.body.rebounds,
    }

    const stat = await Stat.create(newStat)
    player.stats.push(stat._id)
    await player.save()
    game.boxScore.push(stat._id)
    await game.save()

    // New above
    res.redirect(`/stats/${game._id}`); 
}

async function show(req, res) {
    const game = await Game.findById(req.params.id)
    const team = await Team.findOne({ 'games': game }).populate('players');
    const stats = await Stat.find({ 'game': game }).populate('player');
    //console.log(stat.player.name);
    const players = await Player.find({ _id: { $nin: team.players } }).populate('stats').sort('name');
    res.render('stats/show', { title: 'Game Stats', game, team, stats, players });
}
const Team = require('../models/team');

module.exports = {
  index
};

async function index(req, res) {
    const teams = await Team.find({}).populate('games');
    console.log(teams)
    teams.forEach(function (t) {
        let tally = t.games.reduce(function(acc, game){
            console.log(game)
            acc[game.winLoss] = acc[game.winLoss] ? acc[game.winLoss] + 1 : 1;
            return acc;
            }, {});
            t.tally = tally
        })
    console.log(teams)
    res.render('teamstandings/index', { title: 'Team Standings' });
}

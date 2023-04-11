const Team = require('../models/team');
const Player = require('../models/player');

module.exports = {
  index,
  new: newTeam,
  create,
  show,
  delete: deleteTeam,
};

async function deleteTeam(req, res) {
    const team = await Team.findById(req.params.id)
    await Team.deleteOne(team)
    res.redirect('/teams');
}

async function index(req, res) {
  const teams = await Team.find({});
  res.render('teams/index', { title: 'My Teams', teams });
}

async function show(req, res) {
    const team = await Team.findById(req.params.id).populate('players');
    const players = await Player.find({ _id: { $nin: team.players } }).sort('name');
    res.render('teams/show', { title: 'Team Roster', team, players });
}

function newTeam(req, res) {
    res.render('teams/new', { title: 'Add Team', errorMsg: '' });
}
  
async function create(req, res) {
    try {
      const team = await Team.create(req.body);
      res.redirect(`/teams/${team._id}`);
    } catch (err) {
      console.log(err);
      res.render('teams/new', { errorMsg: err.message });
    }
}
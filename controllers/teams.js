const Team = require('../models/team');
const Player = require('../models/player');

module.exports = {
  index,
};

async function index(req, res) {
  const teams = await Team.find({});
  res.render('teams/index', { title: 'My Teams', teams });
}
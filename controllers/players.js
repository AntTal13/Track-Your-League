const Player = require('../models/player');
const Team = require('../models/team');

module.exports = {
  new: newPlayer,
  create,
  addToRoster,
  delete: deletePlayer,
  edit,
  update
};

async function update(req, res) {
    const player = await Player.findById(req.params.id);
    await Player.updateOne(player, req.body);
    res.redirect(`/players/new`);
}

async function edit(req, res) {
    const player = await Player.findById(req.params.id);
    res.render('players/edit', { title: 'Edit Player', player });
}

async function deletePlayer(req, res) {
    const team = await Team.findOne({ 'players._id': req.params.id, 'players.user': req.user._id });
    if (!team) return res.redirect('/teams');
    team.players.remove(req.params.id);
    await team.save();
    res.redirect(`/teams/${team._id}`);
}

async function addToRoster(req, res) {
    const team = await Team.findById(req.params.id);
    // The cast array holds the performer's ObjectId (referencing)
    team.players.push(req.body.playerId);
    await team.save();
    res.redirect(`/teams/${team._id}`);
}

async function newPlayer(req, res) {
  const players = await Player.find({}).sort('name');
  res.render('players/new', { title: 'Add Player', players });
}

async function create(req, res) {
  req.body.born += 'T00:00';
  try {
    await Player.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/players/new');
}
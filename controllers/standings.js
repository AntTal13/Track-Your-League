module.exports = {
  index
};

async function index(req, res) {
  res.render('teamstandings/index', { title: 'Team Standings' });
}
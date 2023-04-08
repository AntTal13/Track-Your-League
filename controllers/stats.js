module.exports = {
    index
};
  
async function index(req, res) {
    res.render('stats/index', { title: 'Game "?" Stats' });
}
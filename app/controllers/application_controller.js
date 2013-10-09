var actions = {};

actions.index = function(req, res){
  res.render('index', {title: 'Jean-michel ... coming soon'});
}

module.exports = actions;

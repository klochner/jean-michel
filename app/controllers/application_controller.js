var actions = {};

actions.index = function(req, res){
  res.render('index', {title: 'My super dummy project'});
}

module.exports = actions;

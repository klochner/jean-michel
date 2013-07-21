var actions = {};

actions.index = function(req, res){
  res.render('index', {title: 'Basic Project'});
}

module.exports = actions;

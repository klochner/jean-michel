module.exports = function(app) {
  app.get('/', function(req, res){
    res.render('index', {title: 'bitchhhhhh'});
  });
}
//move the app.get to a router and let actions.index

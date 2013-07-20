var express = require('express'),
    fs      = require('fs')
;

var app = express();


//loading the app/
var base_path = __dirname;
var folders = ['app/controllers', 'app/models', 'lib']

var Logger;
folders.forEach(function(folder){
  fs.readdirSync(base_path + '/' + folder).forEach(function(file){
    if(folder == folders[0])
      require(base_path + '/' + folder + '/' + file)(app);
    else
      if(file == 'logger.js'){
        Logger = require(base_path + '/' + folder + '/' + file);
      }
      else
        require(base_path + '/' + folder + '/' + file);
  })
});

app.configure(function(){

  app.use(function(req, res, next){
      Logger.request(req);
      next();
  });
});

var settings = require('./config/settings.js')(app);
app.listen(app.get('port'), function(){
  console.log('running on %s', app.get('port'))
});

require('./lib/underscore');

var express   = require('express'),
    fs        = require('fs'),
    path      = require('path')
;

global.Project    = {};
global.app        = express();

Project.root_path = __dirname;

require('./config/application.js').configure({
  express: express,
  paths: {
    controllers: path.join(Project.root_path, 'app', 'controllers'),
    models:      path.join(Project.root_path, 'app', 'models'),
    views:       path.join(Project.root_path, 'app', 'views'),
    assets:       path.join(Project.root_path, 'app', 'assets'),
    public:      path.join(Project.root_path, 'public'),
    config:      path.join(Project.root_path, 'config'),
    lib:         path.join(Project.root_path, 'lib')
  }
}).listen(app.get('port'), function(){
  console.log('running on %s', app.get('port'))
});


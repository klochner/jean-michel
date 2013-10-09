module.exports.configure = function(options){
  var app = global.app,
    express = options.express,
    path    = require('path'),
    logger  = require(path.join(options.paths.lib, 'logger')),
    stylus  = require('stylus'),
    nib     = require('nib'),
    mongoose = require('mongoose')
  ;

  global.mongodb = mongoose.connect('mongodb://localhost/jean-michel');
  global.logger  = logger

  require(path.join(options.paths.lib,'models.js')).autoload(options.paths.models, mongodb);
  require(path.join(options.paths.lib,'controllers.js')).autoload(options.paths.controllers);
  require(path.join(options.paths.config,'routes.js')).draw(options.paths.lib, app);

  //console.log(process.env.NODE_ENV)
  app.configure('development', function(){
    app.use(express.logger('dev'));
  })

  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', options.paths.views);
    app.set('view engine', 'jade');


    app.use('/public/vendor', express.static(path.join(options.paths.public, 'vendor'), {maxAge: 86400000}));

    app.use('/public/styles',stylus.middleware({
      debug: true,
      src: options.paths.assets + '/styles',
      dest: options.paths.public + '/styles',
      compile: function(str, path){
        return stylus(str).set('filename', path).use(nib()).set('compress', false).import('nib');
      }
    }));

    app.use('/public', express.static(options.paths.public));
  });

  return app;
}

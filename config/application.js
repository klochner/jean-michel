module.exports.configure = function(options){
  var app = global.app,
    express = options.express,
    path    = require('path'),
    logger    = require(path.join(options.paths.lib, 'logger')),
    stylus  = require('stylus'),
    nib     = require('nib')
  ;

  global.mongodb = {} //mongoose.connect('mongodb://localhost/project');
  global.logger  = logger

  require(path.join(options.paths.lib,'models.js')).autoload(options.paths.models, mongodb);
  require(path.join(options.paths.lib,'controllers.js')).autoload(options.paths.controllers);
  require(path.join(options.paths.config,'routes.js')).draw(options.paths.lib, app);


  app.configure(function(){
    app.set('port', process.env.port || 3000);
    app.set('views', options.paths.views);
    app.set('view engine', 'jade');

    app.use(function(req, res, next){
      logger.request(req);
      next();
    });

    app.use(stylus.middleware({
      debug: true,
      src: options.paths.assets,
      dest: options.paths.public,
      compile: function(str, path){
        return stylus(str).set('filename', path).use(nib()).set('compress', false).import('nib');
      }
    }));

    app.use(express.static(options.paths.public, {maxAge: 86400000}));
  });

  return app;
}

Project.controller_objects = {};

module.exports.autoload = function(controllers_path, app){
  var fs = require('fs'),
      path = require('path'),
      inflection = require('./inflection.js')
  ;
  var files = fs.readdirSync(controllers_path),
      names = _.map(files, function(file){ return path.basename(file); });

  _.each(names, function(controller){
    c_id = inflection.camelize( controller.replace(/.js$/, ''));
    Project.controller_objects[c_id] = require(path.join(controllers_path, controller));
  });
}

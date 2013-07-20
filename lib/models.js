module.exports.autoload = function(models_path, db){
  var fs = require('fs'),
      path = require('path')
  ;
  var files = fs.readdirSync(models_path),
      names = _.map(files, function(file){ return path.basename(file); });

  _.each(names, function(model){
    require(path.join(models_path, model));
  });
}

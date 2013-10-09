Project.models = {};
Project.resources = {};

module.exports.autoload = function(models_path, db){
  var fs = require('fs'),
      path = require('path'),
      inflection = require('./inflection.js')
  ;
  var files = fs.readdirSync(models_path),
      filenames = _.map(files, function(file){ return path.basename(file); });

  _.each(filenames, function(model_filename){
    model_name = inflection.camelize(model_filename.replace(/.js$/, ''));
    model = require(path.join(models_path, model_filename));
    if(model_filename.match(/_resource/))
      Project.resources[model_name] = new model(db)
    else
      Project.models[model_name] = model
  });
  console.log(Project);
}

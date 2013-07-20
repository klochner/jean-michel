module.exports.draw = function(lib_path, app){
  var path = require('path'),
      router = require(path.join(lib_path, 'router.js'))
  ;
  router
    .match('/')
}

var express = require('express'),
    stylus  = require('stylus'),
    nib     = require('nib')
    ;
/*
* Settings for the app
*/
module.exports = function(app){
  app.configure(function(){
    app.set('port', process.env.port || 3000);
    app.set('views', __dirname + '/../app/views');
    app.set('view engine', 'jade');

    app.use(stylus.middleware({
      debug: true,
      src: __dirname + '/../app/assets/',
      dest: __dirname + '/../public/',
      compile: function(str, path){
        return stylus(str).set('filename', path).use(nib()).set('compress', false).import('nib');
      }
    }));

    app.use(express.static(__dirname + '/../public', {maxAge: 86400000}));
  });
};

define(['domReady', 'angular'], function(domReady){
  'use strict';

  return function(apps_o){
    domReady(function(){
      apps_o.forEach(function(app_o){
        angular.bootstrap(app_o.dom, [app_o.name]);
      });
    });
  }
});

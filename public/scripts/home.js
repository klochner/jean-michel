//define the require config
require.config({
  paths: {
    angular: '../vendor/angular.min',
    domReady: '../vendor/require/domReady',
    dummy: 'app'
  },
  baseUrl: 'scripts',
  priority: ['angular'],
  shims: {
    'angular': { exports: 'angular' },
    'dummy': {
      deps: ['angular']
     }
  }
});

require(['bootstrap', 'dummy'], function(bootstrap, dummy){
  'use strict';
  bootstrap([
    { dom: document.body, name: dummy['name']}
  ])
})

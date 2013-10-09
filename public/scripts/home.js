//define the require config
require.config({
  paths: {
    angular: '/public/vendor/angular.min',
    domReady: '/public/vendor/require/domReady',
    dummy: '/public/scripts/app',
    bootstrap: '/public/scripts/bootstrap',
  },
  baseUrl: 'public/scripts',
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

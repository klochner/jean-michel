define(['controllers/controllers'], function(controllers){
  controllers.controller('dummyCtrl', ['$scope', function($scope){
    $scope.foo = 'Jean-michel will help you keep track of your ping-pong matches and scores';
  }]);
});

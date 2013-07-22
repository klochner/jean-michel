define(['controllers/controllers'], function(controllers){
  controllers.controller('dummyCtrl', ['$scope', function($scope){
    $scope.foo = 'Dummy Project';
  }]);
});

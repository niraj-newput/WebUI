var formApp = angular.module('formApp',[]);

formApp.controller('formController',['$scope', function($scope){
  $scope.candidate = {};
  $scope.status = ['podium', 'jersey', 'jerseyPodium'];
  $scope.obj = [{status:['podium', 'jersey', 'jerseyPodium']}];
}]);
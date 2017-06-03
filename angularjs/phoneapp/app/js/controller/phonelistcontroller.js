app.controller('phoneListController',['$scope','$http','dataService', function($scope, $http, dataService) {
  // $http.get('app/phones/phones.json').then(function(response) {
  //   $scope.phones = response.data;
  // });
  console.log('controller');
  dataService.getPhones('app/phones/phones.json').then(function(response) {
    console.log('return promise ' + response);
    $scope.phones = response.data;
  });
  console.log($scope.phones);
  $scope.order = 'age';
}]);
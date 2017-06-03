
app.controller('PhoneListCtr',['$scope',  '$http',function($scope, $http){
  
  $http.get('phones/phones.json').then(function(response) {
    $scope.phones = response.data;
  });
  $scope.order = 'age';
}]);
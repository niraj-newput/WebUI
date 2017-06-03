app.controller('mainController',function() {
  this.name = 'niraj';
  this.add = 'indore';
  this.url = 'sum.html';
});

app.controller('sum',['$scope','$routeParams', function($scope, $routeParams) {
  console.log('currrent url ' + $routeParams.currrent);
  console.log($routeParams.a);
  console.log($routeParams.b);
  $scope.a = $routeParams.a;
  $scope.b = $routeParams.b;
}]);

app.controller('suminput',['$scope','$interpolate','$location', function($scope, $interpolate, $location) {
  $scope.a = 0 ;
  $scope.b = 0;
  
  $scope.doSum = function(){
    console.log('sum');
    var url = $interpolate('/sum/{{a}}/{{b}}')($scope);
    $location.path(url);
  }
}]);
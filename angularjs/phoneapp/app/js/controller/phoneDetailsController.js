app.controller('phoneDetailsController',['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  var phoneId = $routeParams.id;
  console.log('phone id ' + phoneId);
  var str = 'app/phones/' + phoneId + '.json';
  $http.get(str).then(function(response) {
    $scope.phonesDetails = response.data;
    $scope.img = $scope.phonesDetails['images'][0];
    console.log($scope.phonesDetails);
  });
  console.log($scope.phonesDetails);
  
  $scope.setImg = function(img) {
    $scope.img = img;
    console.log(img);
  }
}]);
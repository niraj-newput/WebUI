var app =angular.module('phone',['ngRoute']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/',{
    templateUrl: 'app/template/home.html',
    controller: 'phoneListController'
  }).when('/phones/:id',{
    templateUrl: 'app/template/phonedetails.html',
    controller: 'phoneDetailsController'
  });
}]);
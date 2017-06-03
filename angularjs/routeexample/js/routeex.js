var app = angular.module('routeapp',['ngRoute']);



app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/',{
    templateUrl: 'template/default.html',
  }).when('/home',{
    templateUrl: 'template/main.html',
    controller: 'mainController',
    controllerAs: 'ctrl'
  }).when('/sum/:a/:b',{
    templateUrl: 'template/sum.html',
    controller: 'sum',
  }).when('/suminput',{
    templateUrl: 'template/suminput.html',
    controller: 'suminput',
  });
}]);




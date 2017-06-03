var app = angular.module('phoneApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
      templateUrl: 'template/index.html',
      controller: 'PhoneListCtr',
    });
    
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
}]);
var app = angular.module('app',['ngRoute','ngComponentRouter']);

app.config(['$locationProvider',function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
     requireBase: false,
  });
}]);

app.value('$routerRootComponent', 'rootComponent');
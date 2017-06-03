var app = angular.module('app',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider.state('home',{
    url: '/home',
    templateUrl: 'partial-home.html'
  }).state('home.list',{
    url: '/list',
    templateUrl: 'partial-home-list.html',
    controller: function($scope) {
      $scope.names = ['Shubham', 'Vishal', 'Anshul'];
    }
  }).state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
  }).state('about', {
        url: '/about',
        views: {
          '': {
                templateUrl: 'partial-about.html' 
              },
          'columnOne@about':  {
            template: 'I look a column',
          },
          'columnTwo@about': {
            template: 'table-template.html',
            controller: 'tableController',
          }
        }
  });
}]);

app.controller('tableController',['$scope', function($scope) {
  $scope.msg = 'test';
  $scope.names = [
      {
          name: 'shubham',
          age: 23
      },
      {
          name: 'Vishal',
          age: 22
      },
    ];
}]);
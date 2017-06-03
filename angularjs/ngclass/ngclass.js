var app = angular.module('ngdemo',[]);



app.directive('dir',function() {
  return {
    restrict: 'C',
    template: '<div>Hello</div>',
  };
});
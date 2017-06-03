var app = angular.module('modal',['angularModalService']);

app.controller('controller',['$scope','ModalService',function($scope,ModalService) {
  $scope.show = function() {
    ModalService.showModal({
      templateUrl: 'modal.html',
      controller: 'ModalController'
    }).then(function(modal) {
        console.log(modal);
        modal.element.modal();
        modal.close.then(function(result) {
        $scope.message = 'You said'  + result;
      });
    });
 };
 
}]);

app.controller('ModalController', function($scope, close) {
  
 $scope.close = function(result) {
 	close(result, 500); // close, but give 500ms for bootstrap to animate
 };

});
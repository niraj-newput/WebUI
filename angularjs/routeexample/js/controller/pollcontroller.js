app.controller('pollController',['$scope','bookService', function($scope, bookService) {
  this.data = bookService.getPollCandidate();
}]);

app.service('bookService',[ '$http','$q',function($http, $q) {
  this.getPollCandidate = function(){
    var q = $q.defer();
    $http({
      method: 'POST',
      url: 'https://t6pgmhuys9.execute-api.us-west-2.amazonaws.com/dev/webhook?functionName=GetResultCandidateForWeb',
      data: {
        result: '2017',
        status: 'podium',
      },
      datatype: 'json'
    }).then(function(response){
      q.resolve(response);
      console.log('resolve');
      console.log(response);
    });
    return q.promise;
  }
}]);
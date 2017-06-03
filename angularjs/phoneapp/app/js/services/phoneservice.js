app.factory('dataService', ['$http','$routeParams','$q', function($http, $routeParams, $q) {
  // var url = 'app/phones/' + $routeParams.id + '.json';
  var data = {};
  
  data.getPhones = function(url) {
    var q = $q.defer();
    $http.get(url).then(function(response) {
      console.log( response);
      q.resolve(response);
      data.phone = response.data;
    }, function(error) {
      q.reject('some error');
    });
    return  q.promise;
  }
  return data;
}]);
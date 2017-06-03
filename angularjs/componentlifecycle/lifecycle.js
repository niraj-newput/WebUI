var app = angular.module('app',[]);

// app.controller('lifecycleController',['$http', function($http){
//     this.user = ['niraj', 'shubham'];
//     this.$onInit = function(){
//       $http.get('http://it-ebooks-api.info/v1/search/php%20mysql').then(function(response){
//         this.user = response;
//         console.log(this.user);
//       });
//     }
// }]);

app.component('onChanges', {
  bindings: {
    name: '<'
  },
  template: '<h1>{{$ctrl.greeting}}</h1> ',
  controller: function() {
    this.$onChanges = function (obj) {
      if (obj.name && this.name) {
        var prefix;
        (obj.name.currentValue.toLowerCase() === 'thomas') ?
          prefix = 'Howdy ' : prefix = 'Hello ';
        this.greeting = prefix + this.name;
        
      }
      if(!this.name) {
        this.greeting = ''
      }
    };
  }
});

// app.controller('lifecycleController',['$http', function($http){
//     this.user = ['niraj', 'shubham'];
//     this.$onChanges = function(change){
//       if(changes.user.isFirstChange()) {
//         this.name = changes.user.currentValue;
//         }
//       };
// }]);
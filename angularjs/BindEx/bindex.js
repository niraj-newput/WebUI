var app = angular.module('bind',[]);

app.controller('bindController',['$scope', function(){
  this.string = 'newput';
  this.obj = {
    name: 'niraj',
    sal: 2300,
  };
  
  this.update = function(){
    this.obj = {
      name: 'shubham',
      sal: 4000,
    };
  };  
}]);

app.component('bindData',{
  template: '<div> <h4>Isolated scope</h4><p>Object is : {{con.data}}</p><p>String is : {{con.strr}}</p>'
             +'<button ng-click="con.updateValue();">Update from component</button></div>',
  bindings: {
    data: '=',
    strr: '=',
  },
  controller: function(){
    this.updateValue = function(){
      console.log('up');
      this.strr = 'update string';
      console.log(this.str);
      this.data = {
        name: 'anshul',
        sal: 23300,
      }
    };
  },
  controllerAs : 'con'
});
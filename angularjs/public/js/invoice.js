var app = angular.module('invoice',['finance']);
app.controller('InvoiceController', ['currencyConvertor',function(currencyConvertor){
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = currencyConvertor.currencies;
  
  this.total = function total(outCurr) {
    return currencyConvertor.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };
  
}]);


app.controller('ShowName', function($scope){
  $scope.name = "niraj";
});

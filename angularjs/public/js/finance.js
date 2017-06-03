angular.module('finance',[]).factory('currencyConvertor',function() {
  var currencies = ['USD', 'EUR', 'CNY'];
  var useToRate = {
    EUR : 1.3,
    USD : 2,
    CNY : 6.09,
  };
  
  var convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
    return amount * useToRate[outCurr] / useToRate[inCurr];
  };
  
  return {
    currencies : currencies,
    convertCurrency: convertCurrency
  };
});
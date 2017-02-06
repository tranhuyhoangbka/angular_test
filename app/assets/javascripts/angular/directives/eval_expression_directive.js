'use strict';

angular.module('exampleApp').directive('evalExpression', evalExpression);
evalExpression.$inject = ['$parse'];

function evalExpression($parse) {
  var expressionFn = $parse('total | currency');
  return {
    scope: {
      amount: '=amount',
      tax: '=tax'
    },
    link: function(scope, element, attrs) {
      scope.$watch('amount', function(newValue) {
        var localData = {total: Number(newValue) + (Number(newValue) * (Number(scope.tax) /100))}
        element.text(expressionFn(scope, localData));
      });
    }
  }
}

'use strict';

angular.module('exampleApp').directive('evalExpression', evalExpression);

function evalExpression($parse) {
  return function(scope, element, attrs) {
    scope.$watch(attrs['evalExpression'], function(newValue) {
      try {
        var expressionFn = $parse(scope.expr);
        var result = expressionFn(scope);
        if(_.isUndefined(result)) {
          result = 'No result';
        }
      } catch(err) {
        result = 'Cannot evaluate expression';
      }
      element.text(result);
    });
  }
}

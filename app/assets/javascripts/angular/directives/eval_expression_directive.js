'use strict';

angular.module('exampleApp').directive('evalExpression', evalExpression);
evalExpression.$inject = ['$compile'];

function evalExpression($compile) {
  return function(scope, element, attrs) {
    var content = '<ul><li ng-repeat="city in cities">{{city}}</li></ul>';
    var listElem = angular.element(content);
    var compileFn = $compile(listElem);
    compileFn(scope);
    element.append(listElem);
  };
}

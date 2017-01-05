'use strict';

angular.module('exampleApp').directive('simpleRepeater', simpleRepeater);
function simpleRepeater() {
  return {
    scope: {
      data: '=source',
      propName: '@itemName'
    },
    transclude: 'element',
    compile: function(element, attrs, transcludeFn) {
      return function($scope, $element, $attr) {
        console.log($scope.data)
        $scope.$watch('data.length', function() {
          var parent = $element.parent();
          parent.children().remove();
          _.forEach($scope.data, function(item, i) {
            var childScope = $scope.$new();
            childScope[$scope.propName] = $scope.data[i];
            transcludeFn(childScope, function(clone) {
              parent.append(clone);
            });
          });
        });
      }
    }
  }
}

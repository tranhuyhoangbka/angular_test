angular.module('exampleApp').directive('unorderedList', function() {
  return {
    link: function(scope, element, attrs) {
      scope.data = scope[attrs['unorderedList']];
    },
    templateUrl: function(elem, attrs) {
      return attrs['template'] === 'table' ? 'tableTemplate.html' : 'listTemplate.html';
    },
    restrict: "EACM",
    replace: true
  }
});

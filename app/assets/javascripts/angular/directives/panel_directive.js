angular.module('exampleApp').directive('panel', panel);

function panel() {
  return {
    link: function(scope, element, attrs) {
      scope.dataSource = 'directive';
    },
    restrict: 'E',
    scope: false,
    template: function() {
      return angular.element(document.querySelector('#template')).html();
    },
    transclude: true
  }
}

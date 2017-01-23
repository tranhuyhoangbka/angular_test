'use strict';

angular.module('customDirectives').directive('newtriButton', newtriButton);

function newtriButton(logService) {
  return {
    restrict: 'EA',
    scope: {counter: '=counter'},
    link: function(scope, element, attrs) {
      element.on('click', function(event) {
        logService.log('Button click: ' + event.target.innerText)
        scope.$apply(function() {
          scope.counter++;
        });
      });
    }
  };
}

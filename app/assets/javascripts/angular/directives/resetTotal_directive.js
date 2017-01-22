'use strict';

angular.module('exampleApp').directive('resetTotal', resetTotal);

function resetTotal() {
  return {
    scope: {data: '=productData', propname: '@propertyName'},
    template: document.querySelector('#resetTemplate').outerText,
    require: '^productTable',
    link: function(scope, element, attrs, ctrl) {
      scope.reset = function() {
        _.forEach(scope.data, function(item, index) {
          scope.data[index][scope.propname] = 0;
        });
        ctrl.updateTotal();
      }
    }
  };
}

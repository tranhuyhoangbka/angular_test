'use strict';

angular.module('exampleApp').directive('productItem', productItem);

function productItem() {
  return {
    template: document.querySelector('#productTemplate').outerText,
    require: '^productTable',
    link: function(scope, element, attrs, ctrl) {
      scope.$watch('item.quantity', function() {
        ctrl.updateTotal();
      });
    }
  };
}

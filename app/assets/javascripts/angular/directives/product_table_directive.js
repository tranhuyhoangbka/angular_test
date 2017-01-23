'use strict';

angular.module('exampleApp').directive('productTable', productTable);

function productTable() {
  return {
    transclude: true,
    scope: {
      value: '=productTable',
      data: '=productData'
    },
    controller: function($scope, $element, $attrs) {
      function productQuantity(item) {
        return parseInt(item.quantity);
      }
      this.updateTotal = function() {
        $scope.value = _.sum(_.map($scope.data, productQuantity));
      };
    }
  };
}

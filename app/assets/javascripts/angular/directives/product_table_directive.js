'use strict';

angular.module('exampleApp').directive('productTable', productTable);

function productTable() {
  return {
    transclude: true,
    scope: {
      value: '=productTable',
      data: '=productData'
    }
  };
}

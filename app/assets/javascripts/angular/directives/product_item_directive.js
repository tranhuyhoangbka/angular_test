'use strict';

angular.module('exampleApp').directive('productItem', productItem);

function productItem() {
  return {
    template: document.querySelector('#productTemplate').outerText
  };
}

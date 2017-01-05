'use strict';

angular.module('exampleApp').controller('compileController', compileController);
compileController.$inject = ['$scope'];

function compileController($scope) {
  $scope.products = [
    { name: "Apples", price: 1.20 },
    { name: "Bananas", price: 2.42 },
    { name: "Pears", price: 2.02 }
  ];

  $scope.changeData = function() {
    $scope.products.push({name: "Cherries", price: 4.02});
    _.forEach($scope.products, function(product, i) {
      $scope.products[i].price++;
    });
  };
}

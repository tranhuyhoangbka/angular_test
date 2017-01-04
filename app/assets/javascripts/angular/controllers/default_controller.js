'use strict';

angular.module('exampleApp').controller('defaultController', defaultController);
defaultController.$inject = ['$scope'];

function defaultController($scope) {
  $scope.products = [
    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
  ];

  $scope.names = ['Apples', 'Bananas', 'Oranges'];

  $scope.incrementPrices = function() {
    _.forEach($scope.products, function(item, index) {
      $scope.products[index].price++;
    });
  };
}

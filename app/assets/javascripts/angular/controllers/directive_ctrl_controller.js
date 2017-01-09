'use strict';
angular.module('exampleApp').controller('directiveController', directiveController);
directiveController.$inject = ['$scope'];

function directiveController($scope) {
  $scope.products = [
    { name: "Apples", price: 1.20, quantity: 2 },
    { name: "Bananas", price: 2.42, quantity: 3 },
    { name: "Pears", price: 2.02, quantity: 1 }
  ];
}

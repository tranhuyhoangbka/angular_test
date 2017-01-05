'use strict';

angular.module('exampleApp').controller('scopeController', scopeController);
scopeController.$inject = ['$scope'];

function scopeController($scope) {
  // console.log("ok");
  $scope.data = {name: "Adam"};
  $scope.city = "London";
}

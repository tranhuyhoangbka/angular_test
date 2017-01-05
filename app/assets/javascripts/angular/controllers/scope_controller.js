'use strict';

angular.module('exampleApp').controller('scopeController', scopeController);
scopeController.$inject = ['$scope'];

function scopeController($scope) {
  // console.log("ok");
  $scope.data = {name: "Adam", defaultCity: 'London'};
  $scope.city = "London";

  $scope.getCity = function(name) {
    return name === 'Adam' ? $scope.data.defaultCity : 'Unknow';
  };
}

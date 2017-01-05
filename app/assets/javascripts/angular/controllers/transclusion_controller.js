angular.module('exampleApp').controller('transclusionController', transclusionController);
transclusionController.$inject = ['$scope'];

function transclusionController($scope) {
  $scope.dataSource = 'controller';
}

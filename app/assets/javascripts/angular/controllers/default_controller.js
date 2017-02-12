'use strict';

angular.module('exampleApp').controller('defaultController', defaultController);
defaultController.$inject = ['$scope', '$sce', '$sanitize', '$exceptionHandler', '$anchorScroll', '$location', '$interval', '$window', '$document', 'logService'];

function defaultController($scope, $sce, $sanitize, $exceptionHandler, $anchorScroll, $location, $interval, $window, $document, logService) {
  $scope.dataVal = '100.23';
  // $scope.displayAlert = function(msg) {
  //   $window.alert(msg);
  // };
  //
  $scope.price = '100.23';
  $scope.dangerousData = "<p>This is <b onmouseover=alert('Attack!')>dangerous</b> data</p>";
  $scope.$watch('dangerousData', function(newValue) {
    $scope.trustData = $sce.trustAsHtml(newValue);
  });
  $scope.throwEx = function() {
    try{
      throw new Error('Triggered Exception');
    } catch(ex) {
      $exceptionHandler(ex, 'button click');
    }
  };
  $scope.itemCount = 50;
  $scope.items = [];

  for(var i = 0; i < $scope.itemCount; i++) {
    $scope.items[i] = 'Item ' + i;
  }

  $scope.show = function(id) {
    $location.hash(id);
    if(id == 'bottom') {
      $anchorScroll();
    }
  };

  $scope.$on('$locationChangeSuccess', function(event, newUrl) {
    $scope.url = newUrl;
  });

  $scope.setUrl = function(component) {
    switch(component) {
      case 'reset':
        $location.path('');
        $location.hash('');
        $location.search('');
        break;
      case 'path':
        $location.path('/cities/london');
        break;
      case 'hash':
        $location.hash('north');
        break;
      case 'search':
        $location.search('select', 'hotels');
        break;
      case 'url':
        $location.url('/cities/lodon?select=hotels#north');
        break;
    }
  };

  $interval(function() {
    $scope.time = new Date().toTimeString();
  }, 2000);

  // $document.find('button').on('click', function(event) {
  //   $window.alert(event.target.innerText);
  // });

  $scope.data = {
    cities: ['London', 'New York', 'Paris'],
    totalClicks: 0
  };
  $scope.$watch('data.totalClicks', function(newVal) {
    logService.log('Total click count: ' + newVal);
  });

  $scope.dataValue = 'Not Sure';
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

angular.module('exampleApp').directive('demoDirective', function() {
  return function(scope, element, attrs) {
    var listElem = angular.element('<ol>');
    element.append(listElem);
    _.forEach(scope.names, function(item) {
      listElem.append((angular.element('<li>')).append((angular.element('<span>')).text(item)));
    });
    var buttons = element.find('button');
    buttons.on('click', function(e) {
      element.find('li').toggleClass("bold");
    });
  }
});

'use strict';

angular.module('exampleApp').directive('triButton', triButton);

function triButton() {
  return {
    restrict: 'E',
    replace: true,
    require: 'ngModel',
    template: document.querySelector('#triTemplate').outerText,
    link: function(scope, element, attrs, ctrl) {
      var setSelected = function(value) {
        var buttons = element.find('button');
        buttons.removeClass('btn-primary');
        for(var i = 0; i < buttons.length; i++) {
          if(buttons.eq(i).text() == value) {
            buttons.eq(i).addClass("btn-primary");
          }
        }
      };
      ctrl.$render = function() {
        setSelected(ctrl.$viewValue || 'Not Sure');
      };
      element.on('click', function(event) {
        setSelected(event.target.innerText);
        scope.$apply(function() {
          ctrl.$setViewValue(event.target.innerText);
        });
      });

      ctrl.$formatters.push(function(value) {
        return value == "Huh?" ? "Not Sure" : value;
      });

      var validateParser = function(value) {
        var valid = (value == "Yes" || value == "No");
        ctrl.$setValidity('confidence', valid);
        return valid ? value : undefined;
      }

      ctrl.$parsers.push(validateParser);
    }
  };
}

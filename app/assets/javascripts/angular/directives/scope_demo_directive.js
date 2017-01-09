angular.module('exampleApp').directive('scopeDemo', scopeDemo);
function scopeDemo() {
  return {
    template: function() {
      return angular.element(document.querySelector('#scopeTemplate')).html();
    },
    scope: {
      local: '=nameprop',
      cityFn: '&city'
    }
  }
}

angular.module('exampleApp', ['customDirectives', 'customServices'])
  .config(function(logServiceProvider) {
    logServiceProvider.debugEnabled(true).messageCounterEnabled(false);
  }).config(function($locationProvider) {
    if(window.history && history.pushState) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }
  }).config(function($anchorScrollProvider) {
    $anchorScrollProvider.disableAutoScrolling();
  });

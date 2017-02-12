angular.module('exampleApp', ['ngSanitize', 'customDirectives', 'customServices'])
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
  }).factory('$exceptionHandler', function($log) {
    return function(exception, cause) {
      $log.error("Message: " + exception.message + ' ' + 'Cause: ' + cause);
    }
  });

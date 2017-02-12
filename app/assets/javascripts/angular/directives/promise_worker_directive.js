angular.module('exampleApp').directive('promiseWorker', function($q) {
  var deferred = $q.defer();
  return {
    link: function(scope, element, attrs) {
      element.find('button').on('click', function(event) {
        // alert("ok");
        var buttonText = event.target.innerText;
        console.log(buttonText);
        if(buttonText === "Abort") {
          deferred.reject("Abort");
        } else {
          deferred.resolve(buttonText);
        }
      });
    },
    controller: function($scope, $element, $attrs) {
      this.promise = deferred.promise;
    }
  }
}).directive('promiseObserver', function() {
  return {
    require: '^promiseWorker',
    link: function(scope, element, attrs, ctrl) {
      ctrl.promise.then(function(result) {
        return 'Success (' +result + ')';
      }, function(reason) {
        element.text('Fail (' + reason + ')');
      }).then(function(result) {
        element.text(result);
      });
    }
  }
});

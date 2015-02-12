AngulaRailSample
  .controller('MyController', ['$scope','notify', function ($scope, notify) {
     $scope.callNotify = function(msg) {
       notify.yetAnotherAlertMessage(msg);
     };
   }])
  .factory('notify', ['$window', function(win) {
    var msgs = [];
    return {
      yetAnotherAlertMessage: function(msg) {
        msgs.push(msg);
        if (msgs.length == 3) {
          win.alert(msgs.join("\n"));
          msgs = [];
        };
      }
    };
  }]);

var profile = angular.module('yapp');
profile.controller('ClientProfileCtrl', function($scope) {
  $scope.ClientModel = {
    "firstName" : "Matt",
    "lastName" : "Cronin",
    "ssn" : "12456644"
  };
});

var profile = angular.module('yapp');
profile.controller('ClientProfileCtrl', function($scope) {
  $scope.ClientModel = {
    "firstName" : "Matt",
    "lastName" : "Cronin",
    "ssn" : "*****6644",
    "contact": {
      "phone": 1231231234,
      "address": "4242 St. Patti's Center"
    }
  };
});
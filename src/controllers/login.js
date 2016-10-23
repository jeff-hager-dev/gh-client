'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
var login = angular.module('yapp');
login.controller('LoginCtrl', function ($scope, $location) {
    
    $scope.submit = function () {
        
        $location.path('/dashboard');
        
        return false;
    }
    
});
login.controller('ClientLoginCtrl', function ($scope, $location, $rootScope) {
    
    $scope.submit = function () {
        $rootScope.username = $scope.username
        
        $location.path('/client/profile');
        
        return false;
    }
    
});
login.controller('CaseManagerLoginCtrl', function ($scope, $location) {
    
    $scope.submit = function () {
        
        $location.path('/cmgr/cmgrlanding');
        
        return false;
    }
    
});
login.controller('ServiceProviderLoginCtrl', function ($scope, $location) {
    
    $scope.submit = function () {
        
        $location.path('/svcpro/svcprolanding');
        
        return false;
    }
    
});
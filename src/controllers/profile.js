var profile = angular.module('yapp');
profile.controller('ClientProfileCtrl', function ($scope, $http, $rootScope) {
    $scope.username = $rootScope.username;
    
    
    $http.get('http://localhost:3000/client', {params: {username: $scope.username}}).then(function (response) {
        $scope.ClientModel = response.data[0];
        
        console.log($scope.ClientModel);
    });
    
});

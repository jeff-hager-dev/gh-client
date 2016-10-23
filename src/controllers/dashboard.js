'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
var app = angular.module('yapp');

app.controller('DashboardCtrl', function($scope, $state) {
    $scope.$state = $state;

    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
            $scope.menuItems.push({name: item.name, text: item.data.text});

        }
    });
  });

app.controller('CaseManagerCtrl', function($scope, $state) {
    $scope.$state = $state;

    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible && item.parent == 'cmgr') {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });

    Chart.defaults.global.animation.duration = 2000;
    Chart.defaults.global.defaultFontColor = "#FFF";


    $scope.newClientLabels = ['April', 'May', 'June', 'July', 'August', 'September', 'October'];
    $scope.newClientSeries = ['Month'];

    $scope.newClientOptions = {
        title: {
            display: true,
            text: 'New Clients by Month'
        },
        scales: {
            xAxes: [
                {
                    gridLines: { show: true, color: 'white', }
                }
            ]
        }
    };

    $scope.newClientData = [
        [18, 17, 11, 13, 15, 17, 23]
    ];
});

app.controller('ServiceProviderCtrl', function($scope, $state) {
    $scope.$state = $state;

    $scope.menuItems = [];

    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible && item.parent == 'svcpro') {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });

});

app.controller('ClientCtrl', function($scope, $state) {
    $scope.$state = $state;

    $scope.menuItems = [];

    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible && item.parent == 'client') {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });

});

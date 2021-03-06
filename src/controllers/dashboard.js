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
    Chart.defaults.global.title.fontSize = 16;

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

    $scope.servicesSeries = ['Month','asdsad','asdasd'];
    $scope.servicesLabels = ["Housing", "Health Services", "Employment Services", "Food", "Transportation"];
    $scope.servicesData = [300, 500, 100, 50, 200];

    $scope.servicesOptions = {
        title: {
            display: true,
            text: 'Percentage of Services Required'
        }
    };

    $scope.accuityLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.accuitySeries = ['Series A'];
    $scope.accuityData = [
        [28, 48, 40, 19, 86, 27, 90],
    ];


    $scope.accuityOptions = {
        title: {
            display: true,
            text: 'Accuity'
        },
        scales: {
            xAxes: [
                {
                    gridLines: { show: true, color: 'white', }
                }
            ]
        }
    };

});

app.controller('ServiceProviderCtrl', function($scope, $state, $http, $location) {
    $scope.$state = $state;

    $scope.menuItems = [];

    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible && item.parent == 'svcpro') {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });

    /*
    $scope.svcprovider = function() {
      $http.get("http://localhost:8080/resource/id/580c3f4d4e04e3dfb0bca4ae/")
      .then(function(result) {
        return result;
      }, function(er) {
        return er;
      });
    }
    */
    var getResources = function () {
        return $http.get('http://localhost:8080/resource/id/580c3f4d4e04e3dfb0bca4ae/').then(function (result) {
            $scope.svcprovider = result.data;
            return result;
        },function(error) {
            return error;
        });
    };
    $scope.test = "this is a test";
    getResources().data;


    // $scope.svcprovider = [{title: "Sunshine Mission",
    // address: "1520 N. 13th Street, St.Louis, MO 63106",
    // phone: "314-231-8209",
    // webAddress: "www.sunshineministries.org",
    // email: "website@sunshineministries.org",
    // description: "Sunshine Ministries provides emergency services for men in need of immediate assistance in a caring and accepting environment. Food, shelter and other basic needs are provided for each man. A simple hot meal could be their first step to a new life!",
    // resources: 5,
    // lastUpdated: "10/08/2016 4:55pm"}];


    var updateResource = function () {
        var temp = $scope.svcprovider[0];
        delete temp._id;
        return $http.put('http://localhost:8080/resource/id/580c3f4d4e04e3dfb0bca4ae/',temp).then(function (result) {
            $location.path('/svcpro/svcprolanding');
            return result;
        },function(error) {
            return error;
        });
    };


     $scope.editResource = function() {
         updateResource();
     }
});

app.controller('ServiceProviderConCtrl', function($scope, $state, $http) {
    $scope.$state = $state;

    $scope.menuItems = [];

    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible && item.parent == 'svcpro') {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });

    $scope.foodServices = [{title: "Crisis Food Centers",
    address: "21 E. 6th Street, Alton IL 62002",
    phone: "618-462-8201",
    webAddress: "www.crisisfoodcenter.org",
    email: "info@crisisfoodcenter.org",
    description: "Crisis Food Center is focused on providing a high-quality supply of nutritious food to the individuals and families who come to us for help.",
    resources: 12,
    lastUpdated: "10/22/2016 8:42pm"},

    {title: "Glen-Ed Pantry",
    address: "125 5th Avenue, PO Box 756, Edwardsville IL, 62025",
    phone: "618-656-7506",
    webAddress: "www.glenedpantry.org/home",
    email: "glenedpantry@sbcglobal.net",
    description: "An ecumenical organization governed by representatives of 18 churches Services: Food, clothing, school supplies, rent and utility assistance.",
    resources: 10,
    lastUpdated: "10/21/2016 3:20pm"}];

    $scope.housing = [{title: "Section 8 Vouchers",
    address: "3520 Page Boulevard, St Louis, MO 63106",
    phone: "314-286-4357",
    webAddress: "none",
    email: "none",
    description: "Apply for Section 8 Housing Vouchers which allow for asistance in affording housing.",
    resources: 0,
    lastUpdated: "09/18/2016 8:10am"},

    {title: "Franciscan Connection",
    address: "2903 Cherokee Street, St. Louis, Missouri 63118",
    phone: "314-773-8485",
    webAddress: "www.franciscanconnection.org",
    email: "franciscanconnection@theFriars.org",
    description: "Get help and emergency assistance, all of which is offered to low-income St. Louis area individuals and families in times of need. Volunteers and full time staff can help families apply for grants, emergency rent fund, deposits, and much more.",
    resources: 0,
    lastUpdated: "10/01/2016 11:00am"}];

    $scope.shelters = [{title: "Gateway 180",
    address: "1000 N 19th Street, Saint Louis, MO 63106",
    phone: "314-231-1515",
    webAddress: "www.gateway180.org",
    email: "info@gateway180.org",
    description: "Gateway180 is a valuable resource for women, children and families experiencing homelessness. We provide safe, nurturing emergency shelter and offer supportive housing programs that empower adults and families to become independent and permanently housed.",
    resources: 7,
    lastUpdated: "10/22/2016 6:05am"},

    {title: "Sunshine Mission",
    address: "1520 N. 13th Street, St.Louis, MO 63106",
    phone: "314-231-8209",
    webAddress: "www.sunshineministries.org",
    email: "website@sunshineministries.org",
    description: "Sunshine Ministries provides emergency services for men in need of immediate assistance in a caring and accepting environment. Food, shelter and other basic needs are provided for each man. A simple hot meal could be their first step to a new life!",
    resources: 5,
    lastUpdated: "10/08/2016 4:55pm"}];
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

app.controller('QuestionsCtrl', function($scope, $http, $location) {
    var questionIndex = 0;
    var questionList = [
        "Is there anybody that thinks you owe them money?",
        "Do you have enough money to meet all of your expenses on a monthly basis?",
        "Do you have planned activities each day other than just surviving that bring you happiness and fulfillment?",
        "Do you have any friends, family or other people in your life out of convenience or necessity, but you do not like their company?"
    ]

    $scope.client = { viScore: 10.2};
    questionSwitch();
    $scope.clickAnswer = function (answer) {
        questionIndex++;
        questionSwitch();
    };
    $scope.clickBack = function () {
        questionIndex--;
        questionSwitch();
    };
    $scope.clickSubmit = function(){
        $scope.client.username = $scope.client.firstName;
        $http.post('http://localhost:3000/client',$scope.client)
            .then(function(response){
                $location.path('/cmgr/cmgrlanding');
            }, function(err){

            });
    };
    function questionSwitch() {
        $scope.text = questionList[questionIndex];
    };
    $scope.areMoreQuestions = function() {
        return questionList.length > questionIndex;
    };
    $scope.isStart = function(){
        return questionIndex == 0;
    };
});

app.controller('ClientResourcesCtrl', function($scope, $state) {
    $scope.$state = $state;

    $scope.menuItems = [];

   $scope.showHousingPanel = false;

});

app.controller('CmgrResourceCtrl', function($scope) {
    $scope.foodServices = [{title: "Crisis Food Centers",
    address: "21 E. 6th Street, Alton IL 62002",
    phone: "618-462-8201",
    webAddress: "www.crisisfoodcenter.org",
    email: "info@crisisfoodcenter.org",
    description: "Crisis Food Center is focused on providing a high-quality supply of nutritious food to the individuals and families who come to us for help.",
    resources: 12,
    lastUpdated: "10/22/2016 8:42pm"},

    {title: "Glen-Ed Pantry",
    address: "125 5th Avenue, PO Box 756, Edwardsville IL, 62025",
    phone: "618-656-7506",
    webAddress: "www.glenedpantry.org/home",
    email: "glenedpantry@sbcglobal.net",
    description: "An ecumenical organization governed by representatives of 18 churches Services: Food, clothing, school supplies, rent and utility assistance.",
    resources: 10,
    lastUpdated: "10/21/2016 3:20pm"}];

    $scope.housing = [{title: "Section 8 Vouchers",
    address: "3520 Page Boulevard, St Louis, MO 63106",
    phone: "314-286-4357",
    webAddress: "none",
    email: "none",
    description: "Apply for Section 8 Housing Vouchers which allow for asistance in affording housing.",
    resources: 0,
    lastUpdated: "09/18/2016 8:10am"},

    {title: "Franciscan Connection",
    address: "2903 Cherokee Street, St. Louis, Missouri 63118",
    phone: "314-773-8485",
    webAddress: "www.franciscanconnection.org",
    email: "franciscanconnection@theFriars.org",
    description: "Get help and emergency assistance, all of which is offered to low-income St. Louis area individuals and families in times of need. Volunteers and full time staff can help families apply for grants, emergency rent fund, deposits, and much more.",
    resources: 0,
    lastUpdated: "10/01/2016 11:00am"}];

    $scope.shelters = [{title: "Gateway 180",
    address: "1000 N 19th Street, Saint Louis, MO 63106",
    phone: "314-231-1515",
    webAddress: "www.gateway180.org",
    email: "info@gateway180.org",
    description: "Gateway180 is a valuable resource for women, children and families experiencing homelessness. We provide safe, nurturing emergency shelter and offer supportive housing programs that empower adults and families to become independent and permanently housed.",
    resources: 7,
    lastUpdated: "10/22/2016 6:05am"},

    {title: "Sunshine Mission",
    address: "1520 N. 13th Street, St.Louis, MO 63106",
    phone: "314-231-8209",
    webAddress: "www.sunshineministries.org",
    email: "website@sunshineministries.org",
    description: "Sunshine Ministries provides emergency services for men in need of immediate assistance in a caring and accepting environment. Food, shelter and other basic needs are provided for each man. A simple hot meal could be their first step to a new life!",
    resources: 5,
    lastUpdated: "10/08/2016 4:55pm"}];
});

'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var states = [
        { name: 'base', state: { abstract: true, url: '', templateUrl: 'views/base.html', data: {text: "Base", visible: false } } },
        { name: 'login', state: { url: '/login', parent: 'base', templateUrl: 'views/login.html', controller: 'LoginCtrl', data: {text: "Login", visible: false } } },
        { name: 'dashboard', state: { url: '/dashboard', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl', data: {text: "Dashboard", visible: false } } },

        { name: 'cmgr', state: { url: '/cmgr', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'CaseManagerCtrl', data: {text: "Case Manager0", visible: false } } },
        { name: 'svcpro', state: { url: '/svcpro', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'ServiceProviderCtrl', data: {text: "Case Manager1", visible: false } } },

        { name: 'overview', state: { url: '/overview', parent: 'dashboard', templateUrl: 'views/dashboard/overview.html', data: {text: "Overview", visible: true } } },
        { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: "Reports", visible: true } } },


        { name: 'cmgrlanding', state: { url: '/cmgrlanding', parent: 'cmgr', templateUrl: 'views/landings/casemanager.html', data: {text: "Case Manager2", visible: true } } },

        { name: 'svcprolanding', state: { url: '/svcprolanding', parent: 'svcpro', templateUrl: 'views/landings/serviceprovider.html', data: {text: "Case Manager3", visible: true } } },

        { name: 'logout', state: { url: '/login', data: {text: "Logout", visible: true }} },
        { name: 'question', state: { url: '/questionnaire', parent: 'dashboard', templateUrl: 'views/questions/question.html', controller: 'QuestionsCtrl', data: {text: "Questions", visible: true } } }
    ];

var app = angular.module('yapp', ['ui.router','snap', 'ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.when('/cmgr', '/cmgr/cmgrlanding');
    $urlRouterProvider.when('/svcpro', '/svcpro/svcprolanding');
    $urlRouterProvider.otherwise('/dashboard');


    angular.forEach(states, function (state) {
        $stateProvider.state(state.name, state.state);
    });
});

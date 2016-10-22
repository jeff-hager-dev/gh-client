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
        { name: 'casemanager', state: { url: '/casemanager', parent: 'base', templateUrl: 'views/landings/casemanager.html', controller: 'CaseManagerCtrl', data: {text: "Case Manager", visible: false } } },

        { name: 'overview', state: { url: '/overview', parent: 'dashboard', templateUrl: 'views/dashboard/overview.html', data: {text: "Overview", visible: true } } },
        { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: "Reports", visible: true } } },
        { name: 'managerlanding', state: { url: '/managerlanding', parent: 'casemanager', templateUrl: 'views/landings/casemanager.html', data: {text: "Case Manager1", visible: true } } },

        { name: 'logout', state: { url: '/login', data: {text: "Logout", visible: true }} }
    ];

var app = angular.module('yapp', ['ui.router','snap', 'ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.when('/casemanager', '/casemanager/managerlanding');
    $urlRouterProvider.otherwise('/login');


    angular.forEach(states, function (state) {
        $stateProvider.state(state.name, state.state);
    });
});

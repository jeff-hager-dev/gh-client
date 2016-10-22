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

        { name: 'cmgr', state: { url: '/cmgr', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'CaseManagerCtrl', data: {text: "Dashboard", visible: false } } },
        { name: 'svcpro', state: { url: '/svcpro', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'ServiceProviderCtrl', data: {text: "Dashboard", visible: false } } },
        { name: 'client', state: { url: '/client', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'ClientCtrl', data: {text: "Dashboard", visible: false } } },

        { name: 'overview', state: { url: '/overview', parent: 'dashboard', templateUrl: 'views/dashboard/overview.html', data: {text: "Overview", visible: true } } },
        { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: "Reports", visible: true } } },

        { name: 'cmgrlanding', state: { url: '/cmgrlanding', parent: 'cmgr', templateUrl: 'views/landings/casemanager.html', data: {text: "Home", visible: true } } },
        { name: 'svcprolanding', state: { url: '/svcprolanding', parent: 'svcpro', templateUrl: 'views/landings/serviceprovider.html', data: {text: "Home", visible: true } } },
        { name: 'clientlanding', state: { url: '/clientlanding', parent: 'client', templateUrl: 'views/landings/client.html', data: {text: "Home", visible: true } } },


        { name: 'clientprofile', state: { url: '/profile', parent: 'client', templateUrl: 'views/client/profile.html', data: {text: "Profile", visible: true } } },
        { name: 'clientresources', state: { url: '/resources', parent: 'client', templateUrl: 'views/client/resources.html', data: {text: "Resources", visible: true } } },
        { name: 'clientcalendar', state: { url: '/calendar', parent: 'client', templateUrl: 'views/client/calendar.html', data: {text: "Calendar", visible: true } } },
        { name: 'clientdocuments', state: { url: '/documents', parent: 'client', templateUrl: 'views/client/documents.html', data: {text: "Documents", visible: true } } },



        { name: 'logout', state: { url: '/login', data: {text: "Logout", visible: true }} }
    ];

var app = angular.module('yapp', ['ui.router','snap', 'ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.when('/cmgr', '/cmgr/cmgrlanding');
    $urlRouterProvider.when('/svcpro', '/svcpro/svcprolanding');
    $urlRouterProvider.when('/client', '/client/clientlanding');

    $urlRouterProvider.otherwise('/dashboard');


    angular.forEach(states, function (state) {
        $stateProvider.state(state.name, state.state);
    });
});

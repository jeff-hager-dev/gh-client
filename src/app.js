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

        { name: 'clientlogin', state: { url: '/clientlogin', parent: 'base', templateUrl: 'views/client/login.html', controller: 'ClientLoginCtrl', data: {text: "Login", visible: false } } },
        { name: 'cmgrlogin', state: { url: '/cmgrlogin', parent: 'base', templateUrl: 'views/cmgr/login.html', controller: 'CaseManagerLoginCtrl', data: {text: "cmgrLogin", visible: false } } },
        { name: 'svcprologin', state: { url: '/svcprologin', parent: 'base', templateUrl: 'views/svcpro/login.html', controller: 'ServiceProviderLoginCtrl', data: {text: "svcproLogin", visible: false } } },

        { name: 'cmgr', state: { url: '/cmgr', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'CaseManagerCtrl', data: {text: "Dashboard", visible: false } } },
        { name: 'svcpro', state: { url: '/svcpro', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'ServiceProviderCtrl', data: {text: "Dashboard", visible: false } } },
        { name: 'client', state: { url: '/client', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'ClientCtrl', data: {text: "Dashboard", visible: false } } },


        { name: 'overview', state: { url: '/overview', parent: 'dashboard', templateUrl: 'views/dashboard/overview.html', data: {text: "Overview", visible: true } } },
        { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: "Reports", visible: true } } },


        { name: 'cmgrlanding', state: { url: '/cmgrlanding', parent: 'cmgr', templateUrl: 'views/cmgr/landing.html', data: {text: "cmgrLanding", visible: false } } },
        { name: 'svcprolanding', state: { url: '/svcprolanding', parent: 'svcpro', templateUrl: 'views/svcpro/landing.html', data: {text: "svcproLanding", visible: false } } },
        { name: 'clientlanding', state: { url: '/clientlanding', parent: 'client', templateUrl: 'views/client/landing.html', data: {text: "clientLanding", visible: false } } },


        { name: 'clientprofile', state: { url: '/profile', parent: 'client', templateUrl: 'views/client/profile.html', data: {text: "Profile", visible: true } } },
        { name: 'clientresources', state: { url: '/resources', parent: 'client', templateUrl: 'views/client/resources.html', data: {text: "Resources", visible: true } } },
        { name: 'clientcalendar', state: { url: '/calendar', parent: 'client', templateUrl: 'views/client/calendar.html', data: {text: "Calendar", visible: true } } },
        { name: 'clientdocuments', state: { url: '/documents', parent: 'client', templateUrl: 'views/client/documents.html', data: {text: "Documents", visible: true } } },


        { name: 'svcproresources', state: { url: '/resources', parent: 'svcpro', templateUrl: 'views/svcpro/resources.html', data: {text: "List Your Resources", visible: true } } },
        { name: 'svcprocalendar', state: { url: '/listings', parent: 'svcpro', templateUrl: 'views/svcpro/listings.html', data: {text: "Manage Listings", visible: true } } },
        { name: 'svcprodocuments', state: { url: '/connect', parent: 'svcpro', templateUrl: 'views/svcpro/connect.html', data: {text: "Connect", visible: true } } },


        { name: 'cmgrintake', state: { url: '/intake', parent: 'cmgr', templateUrl: 'views/cmgr/intake.html', data: {text: "Intake", visible: true } } },
        { name: 'cmgrresources', state: { url: '/dashboard', parent: 'cmgr', templateUrl: 'views/cmgr/dashboard.html', data: {text: "Dashboard", visible: true } } },
        { name: 'cmgrcalendar', state: { url: '/resources', parent: 'cmgr', templateUrl: 'views/cmgr/resources.html', data: {text: "Resources", visible: true } } },
        { name: 'cmgrdocuments', state: { url: '/filemgr', parent: 'cmgr', templateUrl: 'views/cmgr/filemgr.html', data: {text: "File Manager", visible: true } } },


        { name: 'logout', state: { url: '/login', data: {text: "Logout", visible: true }} },
        { name: 'question', state: { url: '/questionnaire', parent: 'dashboard', templateUrl: 'views/questions/question.html', controller: 'QuestionsCtrl', data: {text: "Questions", visible: true } } }
    ];

var app = angular.module('yapp', ['ui.router','snap', 'ngAnimate', 'chart.js']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    //$urlRouterProvider.when('/cmgr', '/cmgr/cmgrlanding');
    //$urlRouterProvider.when('/svcpro', '/svcpro/svcprolanding');
    //$urlRouterProvider.when('/client', '/client/clientlogin');

    $urlRouterProvider.otherwise('/dashboard');


    angular.forEach(states, function (state) {
        $stateProvider.state(state.name, state.state);
    });
});

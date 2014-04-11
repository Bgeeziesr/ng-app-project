'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular
    .module('myApp', ['ui.router']);

    //routes
    myApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
            })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html'
        })
        .state('copntact', {
            url: 'contact',
            templateUrl: 'partials/contact.html'
        })
    }])

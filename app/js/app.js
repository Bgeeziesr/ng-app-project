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
        .state('pmt', {
            url: '/pmt',
            templateUrl: 'partials/pmt.html',
            controller: 'pmtCtrl',
            resolve:{
                load: function(userFactory){
                    var userRole = userFactory.getCurrentUserRole();
                    if(userRole == 'estimator' || userRole == 'approver'){

                    }
                }
            }
        })
        .state('logout', {
            url: '/logout',
            templateUrl: 'partials/logout.html',
            controller: 'loginCtrl',
            resolve:{
                load: function($rootScope){
                    $rootScope.logout();
                }
            }
        })
    }])

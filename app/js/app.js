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
                load: function(userFactory, $rootScope){
                    var userRole = userFactory.getCurrentUserRole();
                    if(userRole == 'estimator' || userRole == 'approver'){
                        if(userRole == 'approver'){
                            $rootScope.isApprover = true;
                            console.log('user is Approver');
                        }else{
                            $rootScope.isApprover = false;
                            console.log('user is not Approver');
                        }
                    }
                }
            }
        })
        .state('logout', {
            url: '/logout',
            templateUrl: 'partials/logout.html',
            controller: 'loginCtrl',
            onEnter: function($rootScope){
                    $rootScope.logout();
            }
        })
    }])

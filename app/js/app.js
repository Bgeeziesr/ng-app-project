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
                load: function(userFactory, $rootScope, $state){
                    var userRole = userFactory.getCurrentUserRole();
                    if($rootScope.loggedIn && (userRole == 'estimator' || userRole == 'approver')){
                            if(userRole == 'approver'){
                                $rootScope.isApprover = true;
                                console.log('user is Approver');
                            }else{
                                $rootScope.isApprover = false;
                                console.log('user is not Approver');
                            }
                    }else{
                        alert('You are not authorized to access this page.');
                        $state.go('home');
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

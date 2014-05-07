'use strict';

myApp.controller('loginCtrl', function($scope, userFactory, $rootScope, $location) {
    $rootScope.loggedIn = false;
    $scope.formIsFilled = function(){
        if($scope.username && $scope.password){
            return false;
        }else{
            return true;
        }
    };
    $scope.login = function() {

       var user = userFactory.getUser($scope.username, $scope.password);

        if (userFactory.validateUser()) {
            $rootScope.loggedIn = true;
            $scope.username = '';
            $scope.password = '';
            $scope.name = user.name;
            userFactory.setCurrentUserRole(user.role);
        } else {
            $scope.username = '';
            $scope.password = '';
            alert("Login failed. Invalid username or password");
        }
    };

    $scope.$watch('loggedIn', function(){
        console.log('login status is: '+ $rootScope.loggedIn);
    });

    $scope.changeLoggedStatus = function(){

        if($rootScope.loggedIn){
            $rootScope.loggedIn = false;
        }else{
            $rootScope.loggedIn = true;
        }
    }

    $rootScope.logout = function () {
        $rootScope.loggedIn = false;
        userFactory.setCurrentUserRole('none');
        console.log('logged out... scope.loggedIn => ' + $rootScope.loggedIn);
    }
});
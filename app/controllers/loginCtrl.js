'use strict';

myApp.controller('loginCtrl', function($scope, userFactory, $rootScope) {
    $scope.loggedIn = false;
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
            $scope.loggedIn = true;
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

    $rootScope.logout = function () {
        $scope.loggedIn = false;
        userFactory.setCurrentUserRole('none');

    }
});
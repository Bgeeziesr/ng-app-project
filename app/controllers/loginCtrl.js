'use strict';

function loginCtrl($scope) {
    $scope.loggedIn = false;
    $scope.name = 'Brian Goodspeed';

    $scope.login = function() {
        if ($scope.username == 'test' && $scope.password == '1234') {
            $scope.loggedIn = true;
            $scope.username = '';
            $scope.password = '';
            alert("Login successful");
        } else {
            $scope.username = '';
            $scope.password = '';
            alert("Login failed. Invalid username or password");
        }
    };
}
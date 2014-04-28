'use strict';

myApp.controller('menuCtrl', function($scope, $rootScope, $location, userFactory, linkFactory) {

    $scope.links = [];

    $scope.setLinks = function(){

        $scope.links = linkFactory.getLinks(userFactory.getCurrentUserRole());
    }

    $rootScope.$on("$routeChangeStart", function() {
        $scope.setLinks();
    });
});
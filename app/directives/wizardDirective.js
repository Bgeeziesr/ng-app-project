'use strict';

myApp.directive('pmtWizard', function(){
    return{
        restrict: 'E',
        controller: 'pmtCtrl',
        templateUrl: 'partials/pmtWizard.html',
        link: function(scope){
        }
    }
});
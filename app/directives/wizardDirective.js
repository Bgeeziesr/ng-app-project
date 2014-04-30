'use strict';

myApp.directive('pmtWizard', function(){
    return{
        restrict: 'E',
        scope:{
            pmt: "="
        },
        templateUrl: 'partials/pmtWizard.html',
        link: function(scope, element, attrs){
            scope.$watch('pmt',function(){
                console.log(scope.pmt.pid);
            });
        }
    }
});
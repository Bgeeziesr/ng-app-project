'use strict';

myApp.directive('pmtWizard', function(){
    return{
        restrict: 'E',
        scope:{
            pmt: "="
        },
        transclude: false,
        templateUrl: 'partials/pmtWizard.html',
        link: function(scope, element, attrs){

            var pid = $('#pid');
            console.log(pid.textContent);
            console.log(pid.text());

            scope.$watch('pmt',function(){
                pid.text(scope.pmt.pid);
                console.log(pid.text());
                pid.attr('placeholder', scope.pmt.pid);
            });
        }
    }
});
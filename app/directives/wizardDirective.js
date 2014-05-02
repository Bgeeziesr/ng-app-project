'use strict';

myApp.directive('pmtWizard', function($compile){
    return{
        restrict: 'E',
        templateUrl: 'partials/pmtWizard.html',
        link: function(scope, element){

            scope.$watch('curPmt',function(){
                $compile($('.wizard'))(scope);
                if(scope.isEditing){
                    $('#tcpLevel').val(scope.curPmt.tcp.level);
                }
            });
        }
    }
});
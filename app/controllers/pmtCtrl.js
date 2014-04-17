'use strict';

myApp.controller('pmtCtrl', function($scope, pmtFactory){
    $scope.curPmt = {
        id:$scope.pmtId,
        pid:$scope.pid,
        si:$scope.si,
        cr:$scope.cr,
        release:$scope.release,
        mots:{
            id:$scope.motsid,
            desc:$scope.motsDesc,
            name:$scope.motsName
        },
        tcp:{
            level:$scope.tcpLvl,
            totalHrs:$scope.totalHrs,
            hours:{
                jan:$scope.jan,
                feb:$scope.feb,
                mar:$scope.mar,
                apr:$scope.apr,
                may:$scope.may,
                jun:$scope.jun,
                jul:$scope.jul,
                aug:$scope.aug,
                sep:$scope.sep,
                oct:$scope.oct,
                nov:$scope.nov,
                dec:$scope.dec
            }
        },
        comments:$scope.comments
    };

    $scope.pmts = pmtFactory.getPmts();

    $scope.savePmt = function (){

        pmtFactory.create($scope.curPmt);
    }
});

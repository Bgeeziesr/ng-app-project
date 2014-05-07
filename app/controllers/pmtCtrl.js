'use strict';

myApp.controller('pmtCtrl', function($scope, pmtFactory){
    /*
    {
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
    };*/

    $scope.isEditing = false;
    $scope.actionSelected = false;

    $scope.pmts = pmtFactory.getPmts();

    $scope.editPmt = function(thisPmt){
        $scope.curPmt = thisPmt;
        $scope.isEditing = true;
        console.log($scope.curPmt.tcp.totalHrs);

    }

    $scope.createPmt = function(){
        $scope.curPmt = {};
        $scope.isEditing = false;
        console.log('creating new PMT');
    }

    $scope.setPmtAction = function(action){
        $scope.pmtAction = action;
        $scope.actionSelected = true;
        console.log('set pmtAction to "'+action+'"');
    }

    $scope.submitPmtForm = function(){
        switch ($scope.pmtAction){
            case 'save':{
                console.log('saving form...');
                if($scope.isEditing){
                    pmtFactory.updatePmts($scope.pmts);
                }else {
                    pmtFactory.addNewPmt($scope.curPmt);
                }
                break;
            }
            case 'submit':{
                console.log('submitting form...');
                if($scope.isEditing){
                    pmtFactory.updatePmts($scope.pmts);
                }else {
                    pmtFactory.addNewPmt($scope.curPmt);
                }
                break;
            }
            case 'reject':{
                console.log('rejecting form...');
               break;
            }
            case 'approve':{
                console.log('approving form...');
                break;
            }
            default: {
                console.log('ERROR! Unknown action...');
                break;
            }
        }
    }

    $scope.savePmt = function (){
        pmtFactory.create($scope.curPmt);
    }

    $scope.wizardControl = {};
});

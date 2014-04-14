'use strict';

function menuCtrl($scope) {
    var homeLinks = [{'label':'','href':'','icon':''}];
    var approverLinks = [{'label':'My PMTs','href':'/pmt','icon':'folder-open'}];
    var estimatorLinks = [{'label':'','href':'','icon':''}];

    $scope.links = [
        {
            'label': 'My PMTs',
            'href': '/pmt',
            'icon': 'folder-open'
        },
        {
            'label': 'Logout',
            'href': '/logout',
            'icon': 'sign-out'
        }
    ];
};
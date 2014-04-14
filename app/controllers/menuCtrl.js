'use strict';

function menuCtrl($scope) {
    $scope.links = [
        {
            'label': 'My PMTs',
            'href': '/pmt',
            'icon': 'folder-open'
        },
        {
            'label': 'Logout',
            'href': '/',
            'icon': 'sign-out'
        }
    ];
};
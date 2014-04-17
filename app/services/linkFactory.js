'use strict'

myApp.factory('linkFactory', function(){

    var factory = {};

    var homeLinks = [{'label':'Home','href':'#/','icon':'home'}];
    var pmtLinks = [
        {'label':'My PMTs','href':'#/pmt','icon':'folder-open'},
        {'label':'Home','href':'#/','icon':'home'},
        {'label':'Logout','href':'#/logout','icon':'sign-out fa-rotate-180'}
    ];
    var adminLinks = [
        {'label':'Users','href':'#/users','icon':'users'},
        {'label':'MOTs','href':'#/mots','icon':'cogs'},
        {'label':'Home','href':'#/','icon':'home'},
        {'label':'Logout','href':'#/logout','icon':'sign-out fa-rotate-180'}
    ];

    factory.getLinks = function(role){
        switch (role){
            case 'admin':{
                return adminLinks;
            }
            case 'approver':{
                return pmtLinks;
            }
            case 'estimator':{
                return pmtLinks;
            }
            default: {
                return homeLinks;
            }
        }
    };

    return factory;
});
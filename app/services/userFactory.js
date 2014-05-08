'use strict'

myApp.factory('userFactory', function($rootScope){
    var factory = {};
    var userIsValid = false;

    var users = [
        {username:'approve',password:'test',name:'Approver',role:'approver'},
        {username:'estimate',password:'test',name:'Estimator',role:'estimator'},
        {username:'admin',password:'test',name:'Administrator',role:'admin'}
    ]
    var currentUserRole = '';

    factory.getUser = function(uName, pswd){

        for (var i=0;i<users.length;i++){
            if(users[i].username.toLowerCase() === uName.toLowerCase() && users[i].password === pswd){
                userIsValid = true;
                return users[i];
            }
        }
        userIsValid = false;
        return {};
    }

    factory.validateUser = function(){
        return userIsValid;
    }

    factory.setCurrentUserRole = function(role){
        currentUserRole = role;
    }

    factory.getCurrentUserRole = function(){
        return currentUserRole;
    }

    return factory;
})
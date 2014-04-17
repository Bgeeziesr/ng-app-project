'use strict';

myApp.factory('pmtFactory', function(){
    var factory = {};

    var pmt = [
        {
            id:1111,pid:1234,si:121,cr:3124,release:1407,mots:{id:201,desc:'app1 description',name:'app1'},
            tcp:{level:1,totalHrs:100,hrDist:{jan:0,feb:0,mar:0,apr:0,may:40,jun:40,jul:20,aug:0,sep:0,oct:0,nov:0,dec:0}},
            comments:'This has been reviewed but is still being tested'
        },
        {
            id:2222,pid:3121,si:973,cr:543,release:1411,mots:{id:393,desc:'app2 description',name:'app2'},
            tcp:{level:1,totalHrs:50,hrDist:{jan:0,feb:0,mar:0,apr:0,may:0,jun:0,jul:0,aug:20,sep:10,oct:10,nov:10,dec:0}},
            comments:'Please check this pmt to make sure it is correct'
        }
    ];

    factory.getPmts = function(){
        return pmt;
    };

    factory.createPmt = function(newPmt){
        pmt.push(newPmt);
    }

    return factory;
});
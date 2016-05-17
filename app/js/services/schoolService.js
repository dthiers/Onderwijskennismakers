module.exports = function ($http) {
    var schoolService = require('../services/baseService')("school", $http);
    
    //custom call
    schoolService.customCall=function(){
        //do something custom with $http
    }
    
    return {
        schoolService
    }
}
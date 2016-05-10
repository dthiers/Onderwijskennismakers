module.exports = function ($http) {
    var profileService = require('../services/baseService')("user");
    
    //custom call
    profileService.customCall=function(){
        //do something custom with $http
    }
    
    return {
        profileService
    }
}
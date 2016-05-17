module.exports = function ($http) {
    var keywordService = require('../services/baseService')("keyword", $http);
    
    //custom call
    keywordService.customCall=function(){
        //do something custom with $http
    }
    
    return {
        keywordService
    }
}
module.exports = function ($http) {
    var keywordService = require('../services/baseService')("keyword", $http);
    
    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';

    //get Tags
    keywordService.getTagsByKeyword = function(id){
        return $http.get(urlBase + 'keyword/' + id + '/tags');
    }
    
    return {
        keywordService
    }
}
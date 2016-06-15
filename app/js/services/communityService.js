module.exports = function ($http) {
    var communityService = require('../services/baseService')("community", $http);
    
    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';

    //get Moderator
    communityService.getModerator = function(id){
        return $http.get(urlBase + 'community/' + id + '/moderator');
    }
    
    return {
        communityService
    }
}
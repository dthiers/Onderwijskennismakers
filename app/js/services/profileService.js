module.exports = function ($http) {
    var profileService = require('../services/baseService')("user",$http);
    
    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';

    //get Details
    profileService.getUserDetails = function(id){
        return $http.get(urlBase + 'user/' + id + '/details');
    }
    
    //get Content
    profileService.getUserContent = function(id){
        return $http.get(urlBase + 'user/' + id + '/content');
    }
    
    return {
        profileService
    }
}
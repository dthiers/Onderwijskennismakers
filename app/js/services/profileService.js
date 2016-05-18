module.exports = function ($http) {
    var profileService = require('../services/baseService')("user",$http);
    
    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';

    //get Tags
    profileService.getUserDetails = function(id){
        return $http.get(urlBase + 'user/' + id + '/details');
    }
    
    return {
        profileService
    }
}
module.exports = function ($http) {
    var schoolService = require('../services/baseService')("school", $http);
    
    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';

    //get Tags
    schoolService.getExpertsBySchool = function(id){
        return $http.get(urlBase + 'school/' + id + '/experts');
    }
    
    return {
        schoolService
    }
}
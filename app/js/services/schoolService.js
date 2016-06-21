module.exports = function ($http) {
    var schoolService = require('../services/baseService')("school", $http);
    
    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';

    //get Tags
    schoolService.getExpertsBySchool = function(id){
        return $http.get(urlBase + 'school/' + id + '/experts');
    }

    schoolService.addSchool = function(school, options){
        return $http.post(urlBase + 'school', {
            "name" : school.name,
            "logo" : school.logo,
            "description" : school.description 
        }).then(options.onSuccess, options.onError);
    }
    
    return {
        schoolService
    }
}
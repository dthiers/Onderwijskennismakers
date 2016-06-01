module.exports = function ($http) {
    var contentService = require('../services/baseService')("content", $http);
    
    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';
    
    return {
        contentService
    }
}
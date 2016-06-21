module.exports = function ($http) {
    var userService = require('../services/baseService')("user", $http);

    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';

    return {
        userService
    }
};
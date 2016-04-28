module.exports = function ($http) {

    var urlBase = 'http://api-onderwijskennismakers.herokuapp.com/user/';
    var dataFactory = {};
    
    dataFactory.getAll = function () {
        return $http.get(urlBase);
    };

    dataFactory.getUser = function (id) {
        return $http.get(urlBase + id);
    };

    return dataFactory;

}
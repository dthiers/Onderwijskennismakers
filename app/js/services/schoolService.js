module.exports = function ($http) {

    var urlBase = 'http://api-onderwijskennismakers.herokuapp.com/school/';
    var dataFactory = {};
    
    dataFactory.getAll = function () {
        return $http.get(urlBase);
    };

    dataFactory.getSchool = function (id) {
        return $http.get(urlBase + id);
    };

    return dataFactory;

}
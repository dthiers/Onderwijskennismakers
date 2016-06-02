module.exports = function ($http) {
    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';

    return {
        search: function (query, callback) {
            $http.get(urlBase + 'search/' + query)
                .then(function (response) {
                    callback(response.data.data);
                }, function (error) {
                    console.log(error.message);
                });
        }
    }
}

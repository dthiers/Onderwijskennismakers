module.exports = function ($http) {
    var urlBase = 'http://127.0.0.1:3000/';

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

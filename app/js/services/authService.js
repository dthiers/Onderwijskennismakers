module.exports = function ($http) {
    var authService = {};

    return {
        loginServer: function (credentials, options) {
            $http.post("http://onderwijskennismakers.herokuapp.com/login/local", credentials).then(
                options.onSuccess, options.onError
            );
        },
        registerServer: function (credentials, options) {
            $http.post("http://onderwijskennismakers.herokuapp.com/register", credentials).then(
                options.onSuccess, options.onError
            );
        },
        // Method to test if the JWT stored in localStorage will authenticate a
        // user to perform a request on an authenticated route.
        testAuth: function(options) {
          $http.get("http://onderwijskennismakers.herokuapp.com/test2").then(
            options.onSuccess, options.onError
          )
        }
    }
}

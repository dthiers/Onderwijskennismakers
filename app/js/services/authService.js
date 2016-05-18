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
    }
}
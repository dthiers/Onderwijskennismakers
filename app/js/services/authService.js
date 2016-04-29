module.exports = function ($http) {
        var authService = {};

        return {
            loginServer: function(credentials, options){
                $http.post("http://api-onderwijskennismakers.herokuapp.com/login/local", credentials).then(
                    options.onSuccess, options.onError
                );
            }
        }
    }
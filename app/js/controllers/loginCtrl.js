module.exports = function ($scope, AuthService) {

    $scope.login = function(){
        var email = $scope.email;
        var password = $scope.password;
        var validate = true;

        if(password == "" || angular.isUndefined(password)){
            $scope.message = "Voer een wachtwoord in in";
            validate = false;
        }

        if(email == "" || angular.isUndefined(email)){
            $scope.message = "Voer een email in";
            validate = false;
        }

        if(validate){
            AuthService.loginServer({ email: email, password: password}, {
                onSuccess: function(result){
                    // Go To dashboard
                },
                onError: function(err){
                    $scope.message = err.data;
                }
            })
        }
    }
};
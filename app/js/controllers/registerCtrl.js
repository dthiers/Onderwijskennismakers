module.exports = function ($scope, AuthService) {
    
    $scope.register = function () {
        var email = $scope.email;
        var password = $scope.password;
        var password2 = $scope.password2;
        var firstName = $scope.firstName;
        var lastName = $scope.lastName;
        var job = $scope.job;
        var validate = true;

        if (job == "" || angular.isUndefined(job)) {
            $scope.message = "Voer een baan in";
            validate = false;
        }

        if (lastName == "" || angular.isUndefined(lastName)) {
            $scope.message = "Voer een achternaam in";
            validate = false;
        }

        if (firstName == "" || angular.isUndefined(firstName)) {
            $scope.message = "Voer een voornaam in";
            validate = false;
        }

        if (password2 != password) {
            $scope.message = "De wachtwoorden komen niet overeen";
            validate = false;
        }

        if (password2 == "" || angular.isUndefined(password2)) {
            $scope.message = "Voer een wachtwoord herhaling in";
            validate = false;
        }

        if (password == "" || angular.isUndefined(password)) {
            $scope.message = "Voer een wachtwoord in";
            validate = false;
        } else if (password.length < 8) {
            $scope.message = "Wachtwoord te kort(minimaal 8 karakters)";
        }

        if (email == "" || angular.isUndefined(email)) {
            $scope.message = "Voer een email in";
            validate = false;
        }


        if (validate) {
            AuthService.registerServer({
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password,
                "functionDescription": job,
                "profileImage": "images/personen/tj.png",
                "facebook": null,
                "skype": null,
                "phoneNumber": null,
                "twitter": null,
                "linkedIn": null
            }, {
                    onSuccess: function (result) {
                        $scope.message = "";
                        $('#divregister').hide();
                        $('#divLoginBackgroundOverlay').hide();
                        // Go To dashboard
                    },
                    onError: function (err) {
                        $scope.message = err.data;
                    }
                })
        }
    }
};
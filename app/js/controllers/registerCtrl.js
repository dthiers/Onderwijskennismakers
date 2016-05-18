module.exports = function ($scope, AuthService, ResourcesService) {

    $scope.imgLoadingPreviewHidden = true;
    $scope.file_changed = function (element) {
        $scope.$apply(function (scope) {
            $scope.imgLoadingPreviewHidden = false;
            var photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                ResourcesService.postImage(photofile, {
                    onSuccess: function (result) {
                        $scope.image = result.data.data.link;
                        $scope.imgLoadingPreviewHidden = true;
                    },
                    onError: function (err) {
                        console.log(err);
                        $scope.imgLoadingPreviewHidden = true;
                    }
                });
            };
            reader.readAsDataURL(photofile);
        });
    };

    $scope.register = function () {
        var email = $scope.email;
        var password = $scope.password;
        var password2 = $scope.password2;
        var firstName = $scope.firstName;
        var lastName = $scope.lastName;
        var job = $scope.job;
        var image = $scope.image;
        var validate = true;
        
        if (image == "" || angular.isUndefined(image)) {
            $scope.message = "Kies een afbeelding";
            validate = false;
        }
        
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
        debugger;
        if (validate) {
            AuthService.registerServer({
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password,
                "functionDescription": job,
                "profileImage": image,
                "facebook": null,
                "skype": null,
                "phoneNumber": null,
                "twitter": null,
                "linkedIn": null
            }, {
                    onSuccess: function (result) {
                        $scope.message = "";
                        $('#divregister2').hide();
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
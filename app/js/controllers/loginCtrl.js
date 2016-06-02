module.exports = function ($scope, AuthService, $timeout, $state, $localStorage, ResourcesService) {

    $("#divLogin").addClass("show");

    $scope.login = function(){
        var email = $scope.email;
        var password = $scope.password;

        AuthService.loginServer({ email: email, password: password}, {
            onSuccess: function(result){
                console.log(result.data.data[0]);
                $localStorage.user = result.data.data[0];
                // Go To dashboard
                $state.go('dashboard');
            },
            onError: function(err){
                popupMessage("Er is iets misgegaan bij het inloggen");
            }
        })
    }

    $scope.imgLoadingPreviewHidden = true;
    $scope.file_changed = function (element) {
        $scope.$apply(function (scope) {
            $scope.imgLoadingPreviewHidden = true;
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

    $scope.openRegister = function(){
         $scope.type = "register";
         $("#divLogin").addClass("toLeft");
         setTimeout(function(){ 
            $("#divRegister").addClass("show");
        }, 300);
         
    }

    $scope.register = function () {
        var email = $scope.register.email;
        var password = $scope.register.password;
        var password2 = $scope.register.password2;
        var firstName = $scope.register.firstName;
        var lastName = $scope.register.lastName;
        var job = $scope.register.job;
        var image = $scope.image;
        var validate = true;

        console.log(image);
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
        console.log(job);
        
        if (password2 != password) {
            popupMessage("De wachtwoorden komen niet overeen");
            validate = false;
        }

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
                        // Go To dashboard
                        console.log(result);
                        console.log(result.config.data);
                        $localStorage.user = result.config.data;
                        $state.go('dashboard');
                    },
                    onError: function (err) {
                        console.log(err);
                        popupMessage("Er is iets misgegaan met het registreren");
                    }
                })
        }
    }

    function popupMessage(message){
        $scope.message = message;
        $(".popup_message").addClass("flash_popup"); 
        $timeout(function(){
            $(".popup_message").removeClass("flash_popup"); 
        }, 3000);  
        
    }

};

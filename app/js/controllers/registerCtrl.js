module.exports = function ($scope, AuthService, ResourcesService, $timeout) {

    $timeout(function(){
        $("#divRegister").addClass("show"); 
    }, 3000);  

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

    $scope.register = function () {
        var email = $scope.email;
        var password = $scope.password;
        var password2 = $scope.password2;
        var firstName = $scope.firstName;
        var lastName = $scope.lastName;
        var job = $scope.job;
        var image = $scope.image;
        var validate = true;
        
        if (password2 != password) {
            $scope.message = "De wachtwoorden komen niet overeen";
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
                        popupMessage("Succesvol geregistreerd");
                        $("#divRegister").removeClass("show"); 
                        $("#divRegister").addClass("hide"); 
                        $('#divLoginBackgroundOverlay').hide();
                        // Go To dashboard
                    },
                    onError: function (err) {
                        popupMessage(err.data);
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
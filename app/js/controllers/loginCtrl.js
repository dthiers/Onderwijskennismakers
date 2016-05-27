module.exports = function ($scope, AuthService, $timeout) {
    $timeout(function(){
        $("#divLogin").addClass("show"); 
    }, 3000);  

    $scope.login = function(){
        var email = $scope.email;
        var password = $scope.password;

        AuthService.loginServer({ email: email, password: password}, {
            onSuccess: function(result){
              popupMessage("U bent succesvol ingelogd");
              $("#divLogin").removeClass("show"); 
              $("#divLogin").addClass("hide"); 
              $('#divLoginBackgroundOverlay').hide();
                // Go To dashboard
            },
            onError: function(err){
                popupMessage(err.data);
            }
        })
    }

    function popupMessage(message){
        $scope.message = message;
        $(".popup_message").addClass("flash_popup"); 
        $timeout(function(){
            $(".popup_message").removeClass("flash_popup"); 
        }, 3000);  
        
    }

};

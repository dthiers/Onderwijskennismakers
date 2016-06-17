module.exports = function ($scope, user) {

    var self = this;

    $scope.user = user;
    $scope.tab = "mijnBronnen";

    function popupMessage(message){
        $scope.message = message;
        $(".popup_message").addClass("flash_popup"); 
        $timeout(function(){
            $(".popup_message").removeClass("flash_popup"); 
        }, 3000);  
        
    }

};

module.exports = function ($scope, user) {

    var self = this;

    $scope.user = user;

    //default tab
    $scope.tab = 'personalContent';

    function popupMessage(message){
        $scope.message = message;
        $(".popup_message").addClass("flash_popup"); 
        $timeout(function(){
            $(".popup_message").removeClass("flash_popup"); 
        }, 3000);  
        
    }

};

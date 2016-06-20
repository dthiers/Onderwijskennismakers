module.exports = function ($scope, user, ProfileService, $timeout, ModalService) {

    var self = this;
    $scope.user = user;

    $scope.userContent = [];
    $scope.selectedContent;

    getUserResources();

    function getUserResources(){
        ProfileService.profileService.getUserContent($scope.user.id)
            .then(function (response) {
                $scope.userContent = response.data.data;
                popupMessage("Bronnen ingeladen.");
            }, function (error) {
                popupMessage("Er is iets mis gegaan..");
                console.log(error.message);
            });
    };


    function popupMessage(message){
        $scope.message = message;
        $(".popup_message").addClass("flash_popup");
        $timeout(function(){
            $(".popup_message").removeClass("flash_popup");
        }, 3000);

    }

    $scope.setSelected = function(id){

        angular.forEach($scope.userContent, function(value, key) {
            if(value.id == id)
                $scope.selectedContent = value;
        });
    }

    $scope.openResources = function(){
        ModalService.showModal({
            templateUrl: "../partials/directives/resource_overview_directive.html",
            controller: "ResourcesCtrl"
        }).then(function(modal) {
            modal.close.then(function(result) {
                console.log(result);
            });
        });
    }

};

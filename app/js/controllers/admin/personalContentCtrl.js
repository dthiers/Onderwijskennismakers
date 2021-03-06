module.exports = function ($scope, user, ProfileService, $timeout, ModalService, ResourcesService) {

    var self = this;
    $scope.user = user;

    $scope.userContent = [];
    $scope.selectedContent;

    getUserResources();

    function getUserResources(){
        ProfileService.profileService.getUserContent($scope.user.id)
            .then(function (response) {
                $scope.userContent = response.data.data;
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

    $scope.deleteContent = function(id){

        ResourcesService.deleteContent(id,{
            onSuccess: function (result) {
                getUserResources();
                popupMessage("Bron succesvol verwijderd");

                if($scope.selectedContent.id == id)
                    $scope.selectedContent = null;
            },
            onError: function (err) {
                console.log(err);
            }
        });
    }

    $scope.updateSelected = function(){
        ResourcesService.updateContent($scope.selectedContent,{
            onSuccess: function (result) {
                console.log(result);
                getUserResources();
                popupMessage("Bron succesvol geupdate");
                $scope.selectedContent = null;
            },
            onError: function (err) {
                console.log(err);
            }
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

        $scope.openTags = function () {

        ModalService.showModal({
            templateUrl: "../partials/directives/tags/tags_add_directive.html",
            controller: "TagsCtrlResources",
            inputs: {
                id: $scope.selectedContent.id,
                type: "content",
                name: $scope.selectedContent.name
            }
        }).then(function (modal) {
            modal.close.then(function (result) {
                console.log(result);
            });
        });
    }

};

/**
*
*
* resourceDetailCtrl. @use:
*
**/


module.exports = function ($scope, $localStorage, ResourcesService, ModalService, $timeout) {
    console.log('Were in resourceDetailCtrl');

    /**
    * newResource object to store extra information on content
    **/
    $scope.newRescource = {
        name: "",
        community: "",
        description: "",
        isPublic: 0
    }

    /**
    * Load available communities on $scope
    **/
    ResourcesService.getCommunities({
        onSuccess: function (result) {
            $scope.communities = result.data.data;
        },
        onError: function (err) {
            console.log(err);
        }
    });

    /**
    *
    * Save new resource to the API
    *
    * @param: name, description, community
    **/
    $scope.saveResource = function () {
      console.log($scope.data.newResourcePreview.isPublic);
        ResourcesService.setResourceDetails(
          $scope.data.newResourcePreview.name,
          $scope.data.newResourcePreview.community,
          $scope.data.newResourcePreview.description,
          parseInt($localStorage.user.id),
          $scope.data.newResourcePreview.isPublic
        );


        ResourcesService.addResource(
            function () {
                ResourcesService.getLatestResource({
                    onSuccess: function (result) {
                        var latestId = result.data.data.pop().id;
                        ModalService.showModal({
                            templateUrl: "../partials/directives/tags/tags_add_directive.html",
                            controller: "TagsCtrlResources",
                            inputs: {
                                id: latestId,
                                type: "content",
                                name: $scope.data.newResourcePreview.name
                            }
                        }).then(function (modal) {
                            modal.close.then(function (result) {
                                console.log(result);
                            });
                        });
                        popupMessage("Bron succesvol toegevoegd!")
                        //todo: variables resetten en de boel closen!
                        // aanroep om service variables te resseten.
                        ResourcesService.resetValues();
                        ResourcesService.setProperty("");

                        $scope.closeResources();
                    },
                    onError: function (err) {
                        console.log(err);
                    }
                });
            },
            function (err) {
                //todo error afhandelen
                popupMessage("Bron toevoegen is gefaald!")
                console.log(err);
            }
        );
    }

    function popupMessage(message) {
        $scope.infomessage = message;
        $(".popup_message").addClass("flash_popup");
        $timeout(function () {
            $(".popup_message").removeClass("flash_popup");
        }, 3000);

    }
}

/**
*
*
* resourceDetailCtrl. @use:
*
**/

module.exports = function ($scope, ResourcesService) {
    console.log('Were in resourceDetailCtrl');

    /**
    * newResource object to store extra information on content
    **/
    $scope.newRescource = {
        name: "",
        community: "",
        description: ""
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
        ResourcesService.setResourceDetails($scope.data.newResourcePreview.name, $scope.data.newResourcePreview.community, $scope.data.newResourcePreview.description);

        ResourcesService.addResource(
            function () {
                popupMessage("Bron succesvol toegevoegd!")
                //todo: variables resetten en de boel closen!
                ResourcesService.setProperty("");
            },
            function () {
                popupMessage("Bron toevoegen is gefaald!")
                console.log(err);
            }
        );
    }

    function popupMessage(message) {
        $scope.message = message;
        $(".popup_message").addClass("flash_popup");
        $timeout(function () {
            $(".popup_message").removeClass("flash_popup");
        }, 3000);

    }
}

/**
*
* Resource YoutubeCtrl. @use
*
* TODO: in service set following: setResourceType, ResourceLink
*
*
**/

module.exports = function ($scope, ResourcesService) {
        $scope.resourcesService = ResourcesService;
    console.log('Were in the youtubeCtrl');

    ResourcesService.setResourceType("youtube");

    /**
    * Load Youtube onChange of input
    **/
    $scope.searchYoutube = function (inputYoutube) {
        $scope.results = [];

        ResourcesService.searchYoutube(inputYoutube, {
            onSuccess: function (result) {
                $scope.results = result.data.items;
            },
            onError: function (err) {
                console.log(err);
            }
        })
    }

    /**
    * Set the resource link on the service
    **/
    $scope.setResourceLink = function (videoId) {
        $scope.link = videoId;
        ResourcesService.popupStyle = { "left": " calc(50% - 550px)", "top": "20px", "height": "500px" };
        ResourcesService.showYoutube = true;
        ResourcesService.setResourceLink(videoId);
        ResourcesService.setLink(videoId);

        // TODO: load the detail directive
        $scope.$parent.type = "addDetails";
    }

}

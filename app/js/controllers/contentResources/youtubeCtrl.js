/**
*
* Resource YoutubeCtrl. @use
*
* TODO: in service set following: setResourceType, ResourceLink
*
*
**/

module.exports = function($scope, ResourcesService) {
    console.log('Were in the youtubeCtrl');

    ResourcesService.setResourceType("youtube");

    /**
    * Load Youtube onChange of input
    **/
    $scope.searchYoutube = function(inputYoutube){
      $scope.results = [];

      ResourcesService.searchYoutube(inputYoutube, {
          onSuccess: function(result){
              $scope.results = result.data.items;
          },
          onError: function(err){
              console.log(err);
          }
      })
    }

    /**
    * Set the resource link on the service
    **/
    $scope.setResourceLink = function(videoId) {
        $scope.link = videoId;
        ResourcesService.setResourceLink(videoId);
        console.log(videoId);

        // TODO: load the detail directive
        $scope.$parent.type = "addDetails";
    }

}

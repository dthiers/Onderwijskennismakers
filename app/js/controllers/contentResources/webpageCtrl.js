/**
*
* Resource WebpageCtrl. @use
*
* TODO: set resourceLink in service;
*
**/

module.exports = function($scope, ResourcesService) {

    /**
    * TODO: change website to webpage.
    **/
    ResourcesService.setResourceType("website");

    /**
    * Set resource link;
    *
    * TODO: check for authentic link to webpage;
    *
    **/
    $scope.setResourceLink = function(webUrl) {
        ResourcesService.setResourceLink(webUrl);

        $scope.$parent.type = "addDetails";
    }
}

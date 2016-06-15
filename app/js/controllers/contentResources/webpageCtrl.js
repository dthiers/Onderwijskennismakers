/**
*
* Resource WebpageCtrl. @use
*
* TODO: set resourceLink in service;
*
**/

module.exports = function ($scope, ResourcesService, $sce) {
    $scope.resourcesService = ResourcesService;
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
    $scope.setResourceLink = function () {
        debugger;
        var url = $scope.webUrl;
        ResourcesService.popupStyle = { "left": " calc(25% - 250px)", "top": "20px", "height": "500px" };
        ResourcesService.showWebpage = true;
        ResourcesService.setLink($sce.trustAsResourceUrl(url));

        // TODO: load the detail directive
        $scope.$parent.type = "addDetails";
    }
}

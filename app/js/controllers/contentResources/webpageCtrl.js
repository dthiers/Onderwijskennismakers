/**
*
* Resource WebpageCtrl. @use
*
* TODO: set resourceLink in service;
*
**/

module.exports = function ($scope, ResourcesService, $sce) {
    $scope.resourcesService = ResourcesService;
    $scope.webLink = "";
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
    $scope.setResourceLink = function (webLink) {
      console.log(webLink);
      //debugger;
        var url = $scope.webLink;
        ResourcesService.popupStyle = { "left": " calc(25% - 250px)", "top": "20px", "height": "500px" };
        ResourcesService.showWebpage = true;

        // TODO: not working
        //ResourcesService.setResourceLink($sce.getTrustedResourceUrl(webLink));
        ResourcesService.setResourceLink(webLink);
        
        // TODO: load the detail directive
        $scope.$parent.type = "addDetails";
    }
}

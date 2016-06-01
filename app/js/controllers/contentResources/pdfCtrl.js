/**
*
* Resource PdfCtrl. @use
*
* TODO: set resourceLink in service;
*
**/

module.exports = function ($scope, ResourcesService, $sce) {
 $scope.resourcesService=ResourcesService;
    ResourcesService.setResourceType("pdf");

    /**
    * Set resource link;
    *
    * TODO: check for authentic link to PDF;
    *
    **/
    $scope.setResourceLink = function (pdfLink) {
        ResourcesService.setResourceLink(pdfLink);

        $scope.$parent.type = "addDetails";
    }

    $scope.savePdf = function () {
        ResourcesService.popupStyle = { "left": " calc(25% - 250px)", "top": "20px", "height": "500px" };
        var url = $scope.pdfLink;
        ResourcesService.setPDF($sce.trustAsResourceUrl(url));
        ResourcesService.showPDF = true;
    };

}

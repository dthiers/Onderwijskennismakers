/**
*
* Resource PdfCtrl. @use
*
* TODO: set resourceLink in service;
*
**/

module.exports = function($scope, ResourcesService){

    ResourcesService.setResourceType("pdf");

    /**
    * Set resource link;
    *
    * TODO: check for authentic link to PDF;
    *
    **/
    $scope.setResourceLink = function(pdfLink) {
        ResourcesService.setResourceLink(pdfLink);

        $scope.$parent.type = "addDetails";
    }

}

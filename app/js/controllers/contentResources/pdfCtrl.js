/**
*
* Resource PdfCtrl. @use
*
* TODO: set resourceLink in service;
*
**/

module.exports = function ($scope, ResourcesService, $sce, $timeout) {
    $scope.resourcesService = ResourcesService;
    ResourcesService.setResourceType("pdf");

    $scope.pdfLink = "";

    /**
    * Set resource link;
    *
    * TODO: check for authentic link to PDF;
    *
    **/
    $scope.setResourceLink = function (pdfLink) {
        ResourcesService.setResourceLink(pdfLink);

    }

    $scope.savePdf = function () {
        // afvangen dat het einde .pdf is
        var url = $scope.pdfLink;
        var check = url.substr(url.length - 4)
        if (check === ".pdf") {
            ResourcesService.popupStyle = { "left": " calc(25% - 250px)", "top": "20px", "height": "500px" };

            ResourcesService.setLink($sce.trustAsResourceUrl(url));
            ResourcesService.showPDF = true;
            $scope.$parent.type = "addDetails";
        } else {
            popupMessage("Bron is geen pdf");
        }
    };


    function popupMessage(message) {
        $scope.infomessage = message;
        $(".popup_message").addClass("flash_popup");
        $timeout(function () {
            $(".popup_message").removeClass("flash_popup");
        }, 3000);

    }
}


module.exports = function ($scope, ResourcesService, close) {
  
    $scope.type = "";
    $scope.showPDF = true;
    $scope.resourcesService = ResourcesService;
    console.log("Were in resourcesCtrl");

    $scope.addResource = function (type, link) {
        $scope.wrapperStyle = { "margin-top": "20px" }
        $scope.imgLoadingPreviewHidden = true;

        switch (type) {
            case "youtube":
                $scope.type = "addYoutube";
                ResourcesService.setResourceType("youtube");
                ResourcesService.popupStyle = { "top": "20px", "height": "500px" }
                break;
            case "image":
                $scope.type = "addImage";
                ResourcesService.setResourceType("image");
                ResourcesService.popupStyle = { "top": "20px", "height": "500px" }
                break;
            case "webpage":
                $scope.type = "addWebpage";
                ResourcesService.setResourceType("webpage");
                ResourcesService.popupStyle = { "top": "20px", "height": "350px" }
                break;
            case "pdf":
                $scope.type = "addPdf";
                ResourcesService.setResourceType("pdf");
                ResourcesService.popupStyle = { "top": "20px", "height": "350px" }
                break;
            case "details":
                ResourcesService.setResourceLink(link);

                break;
        }
    }

    /**
    *
    * Modal service
    *
    **/
    $scope.closeResources = function (result) {
        ResourcesService.resetValues();
        close(result, 200);
    }

    /**
    *
    * Modal service
    *
    **/

    $scope.savePdf = function () {
        debugger;
        $scope.showPdf = true;
    };

    $scope.$watch(function () { return ResourcesService.getProperty() }, function (newVal, oldVal) {
        $scope.type = ResourcesService.getProperty();
    });


}

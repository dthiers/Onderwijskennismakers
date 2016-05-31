module.exports = function ($scope, ResourcesService, close) {

  $scope.type = "";

  console.log("Were in resourcesCtrl");

    $scope.addResource = function(type, link = ""){
      $scope.popupStyle = { "top":"20px", "height":"500px" }
      $scope.wrapperStyle = { "margin-top":"20px" }
      $scope.imgLoadingPreviewHidden = true;

      switch(type) {
          case "youtube":
              $scope.type = "addYoutube";
              ResourcesService.setResourceType("youtube");
              break;
          case "image":
              $scope.type = "addImage";
              ResourcesService.setResourceType("image");
              break;
          case "webpage":
              $scope.type = "addWebpage";
              ResourcesService.setResourceType("webpage");
              break;
          case "pdf":
              $scope.type = "addPdf";
              ResourcesService.setResourceType("pdf");
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
      $scope.closeResources = function(result){
          close(result, 200);
      }

      /**
      *
      * Modal service
      *
      **/

      $scope.savePdf = function(){
          var url = $scope.inputPDF;
          alert(url);
      };

      $scope.$watch(function () { return ResourcesService.getProperty() }, function (newVal, oldVal) {
          $scope.type = ResourcesService.getProperty();
      });


}

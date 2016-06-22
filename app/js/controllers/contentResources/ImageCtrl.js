/**
*
* Resource PdfCtrl. @use
*
* TODO: set resourceLink in service;
*
**/

module.exports = function ($scope, ResourcesService, $timeout, $sce) {
    $scope.resourcesService = ResourcesService;
    ResourcesService.setResourceType("image");

    $scope.file;

    // $scope.getFile = function () {
    //
    //     var reader = new FileReader();
    //
    //     reader.readAsDataURL($scope.file);
    //     /**
    //     *
    //     * TODO: work this out with a promise
    //     *
    //     **/
    //     $timeout(function () {
    //         $scope.image = reader.result;
    //     }, 1000);
    // }


    $scope.saveImage = function (imageLink) {
        ResourcesService.popupStyle = { "left": " calc(25% - 250px)", "top": "20px", "height": "500px" };

        // ResourcesService.setResourceLink($sce.trustAsResourceUrl($scope.image));
        //ResourcesService.setResourceLink($sce.getTrustedResourceUrl($scope.image));
        //ResourcesService.setResourceLink(imageLink);

        //console.log($scope.image);

        //debugger;
        ResourcesService.showImage = true;
        $scope.$parent.type = "addDetails";

    };

    $scope.file_changed = function (element) {
        $scope.$apply(function (scope) {
            var photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log(photofile);
                ResourcesService.postImage(photofile, {
                    onSuccess: function (result) {
                      /**
                      *
                      **/
                        ResourcesService.setResourceLink(result.data.data.link);
                      /**
                      *
                      **/
                        popupMessage("Foto is succesvol geupload");
                        $scope.imageLink = result.data.data.link;
                    },
                    onError: function (err) {
                        console.log(err);
                    }
                });
            };
            reader.readAsDataURL(photofile);
        });
    };


    function popupMessage(message) {
        $scope.infomessage = message;
        $(".popup_message").addClass("flash_popup");
        $timeout(function () {
            $(".popup_message").removeClass("flash_popup");
        }, 3000);

    }

    // $scope.file_changed = function (element) {
    //     $scope.$apply(function (scope) {
    //         $scope.imgLoadingPreviewHidden = false;
    //         var photofile = element.files[0];
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             ResourcesService.postImage(photofile, {
    //                 onSuccess:function(result){
    //                     $scope.image = result.data.data.link;
    //                     $scope.imgLoadingPreviewHidden = true;
    //                 },
    //                 onError:function(err){
    //                     console.log(err);
    //                     $scope.imgLoadingPreviewHidden = true;
    //                 }
    //             });
    //         };
    //         reader.readAsDataURL(photofile);
    //     });
    // };

}

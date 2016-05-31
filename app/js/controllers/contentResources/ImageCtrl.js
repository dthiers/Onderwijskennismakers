/**
*
* Resource PdfCtrl. @use
*
* TODO: set resourceLink in service;
*
**/

module.exports = function($scope, ResourcesService, $timeout) {

    ResourcesService.setResourceType("image");

    $scope.file;

    $scope.getFile = function(){

        var reader = new FileReader();

        reader.readAsDataURL($scope.file);
        /**
        *
        * TODO: work this out with a promise
        *
        **/
        $timeout(function() {
            $scope.image = reader.result;
        }, 1000);
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

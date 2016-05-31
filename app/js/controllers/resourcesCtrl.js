module.exports = function ($scope, ResourcesService,$sce) {

    $scope.type = "";
    $scope.showPDF = false;
    $scope.preview = {
        name: "Name",
        image: "images/image_preview.jpg",
        description: "Description"
    }

    $scope.imagePreviewStyle = { 'background-image': ' url(' + $scope.image + ')' };
    $scope.short

    $scope.newRescource = { name: "Name test", community: "", description: "Description" }

    $scope.addResource = function (type, link = "") {
        $scope.popupStyle = { "top": "20px", "height": "500px" }
        $scope.wrapperStyle = { "margin-top": "20px" }
        $scope.imgLoadingPreviewHidden = true;

        switch (type) {
            case "youtube":
                $scope.type = "addYoutube";
                ResourcesService.setResourceType("youtube");
                break;
            case "image":
                $scope.type = "addImage";
                ResourcesService.setResourceType("image");
                $scope.popupStyle = { "left": " calc(25% - 250px)", "top": "20px", "height": "500px" };
                break;
            case "website":
                $scope.type = "addWebsite";
                ResourcesService.setResourceType("website");
                $scope.popupStyle = { "left": " calc(25% - 250px)", "top": "20px", "height": "500px" };
                break;
            case "pdf":
                $scope.type = "addPdf";
                $scope.showPDF = true;
                ResourcesService.setResourceType("pdf");
                $scope.popupStyle = { "left": " calc(25% - 250px)", "top": "20px", "height": "500px" };
                break;
            case "details":
                $scope.$parent.$parent.type = "addDetails";
                ResourcesService.setResourceLink(link);
                break;
        }

        var newRescource = $scope.newRescource;

        ResourcesService.getCommunities({
            onSuccess: function (result) {
                $scope.communities = result.data.data;
            },
            onError: function (err) {
                console.log(err);
            }
        });
    }

    $scope.closeResources = function () {
        ResourcesService.setProperty("");
        ResourcesService.resetValues();
    };

    $scope.savePdf = function () {
        $scope.pdfLoaded = true;
        var url = $scope.inputPDF;
        ResourcesService.setPDF($sce.trustAsResourceUrl(url));
    };

    $scope.saveResource = function () {
        if ($scope.newRescource.name != "") {
            if ($scope.newRescource.community != "") {
                if ($scope.newRescource.description != "") {
                    $scope.message = "";
                    ResourcesService.setResourceDetails($scope.newRescource.name, $scope.newRescource.community, $scope.newRescource.description);
                    ResourcesService.addResource({
                        onSuccess: function (result) {
                            ResourcesService.setProperty("");
                            ResourcesService.resetValues();
                        },
                        onError: function (err) {
                            console.log(err);
                        }
                    });
                } else {
                    $scope.message = "Voer een omschrijving in";
                }
            } else {
                $scope.message = "Selecteer een community";
            }
        } else {
            $scope.message = "Voer een naam in";
        }
    };

    $scope.$watch(function () { return ResourcesService.getProperty() }, function (newVal, oldVal) {
        $scope.type = ResourcesService.getProperty();
    });

    $scope.searchYoutube = function () {

        $scope.results = [];

        var query = $scope.inputYoutube;

        ResourcesService.searchYoutube(query, {
            onSuccess: function (result) {
                $scope.results = result.data.items;
            },
            onError: function (err) {
                console.log(err);
            }
        })

    }

    $scope.file_changed = function (element) {
        $scope.$apply(function (scope) {
            $scope.imgLoadingPreviewHidden = false;
            var photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                ResourcesService.postImage(photofile, {
                    onSuccess: function (result) {
                        $scope.image = result.data.data.link;
                        $scope.imagePreviewStyle = { 'background-image': ' url(' + $scope.image + ')' };
                        $scope.imgLoadingPreviewHidden = true;
                    },
                    onError: function (err) {
                        console.log(err);
                        $scope.imgLoadingPreviewHidden = true;
                    }
                });
            };
            reader.readAsDataURL(photofile);
        });
    };

}

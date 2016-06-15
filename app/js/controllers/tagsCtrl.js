module.exports = function ($scope, TagsService, close, id, type, $timeout) {

    $scope.currentObjectId = id;
    $scope.currentObjectType = type;

    TagsService.getDetails($scope.currentObjectId, $scope.currentObjectType, {
        onSuccess: function (result) {
            $scope.currentObject = result.data.data[0];
        },
        onError: function (err) {
            console.log(err);
        }
    })

    loadAllTags();

    $scope.addNewTag = function () {
        TagsService.addTag($scope.txtNewTag, {
            onSuccess: function (result) {

                popupMessage("Tag " + $scope.txtNewTag + "Added.");
                loadAllTags();
                // TagsService.getAll({
                //     onSuccess: function (result) {
                //         var latestTagId = result.data.data.pop().id;
                //         // TagsService.linkTag($scope.currentObjectId, $scope.currentObjectType, latestTagId, {
                //         //     onSuccess: function (result) {
                //         //         loadAllTags();
                //         //     },
                //         //     onError: function (err) {
                //         //         console.log(err);
                //         //     }
                //         // });
                //     },
                //     onError: function (err) {
                //         console.log(err);
                //     }
                // });
            },
            onError: function (err) {
                console.log(err);
            }
        });
    }

    $scope.deleteTag = function (id) {
        TagsService.deleteTag(id, {
            onSuccess: function (result) {
                loadAllTags();
                popupMessage("Tag deleted.");
            },
            onError: function (err) {
                console.log(err);
            }
        });
    }

    $scope.closeResources = function (result) {
        close(result, 200);
    }

    function loadTags() {
        TagsService.getTags($scope.currentObjectId, $scope.currentObjectType, {
            onSuccess: function (result) {
                $scope.tags = result.data.data;
            },
            onError: function (err) {
                console.log(err);
            }
        })
    }

    function loadAllTags() {
        TagsService.getAll({
            onSuccess: function (result) {
                $scope.tags = result.data.data;
                $scope.txtNewTag="";
                $scope.search="";
            },
            onError: function (err) {
                console.log(err);
            }
        })
    }

    function popupMessage(message) {
        $scope.message = message;
        $(".popup_message").addClass("flash_popup");
        $timeout(function () {
            $(".popup_message").removeClass("flash_popup");
        }, 3000);

    }
};

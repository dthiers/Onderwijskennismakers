module.exports = function ($scope, TagsService, $timeout) {


    loadAllTags();

    $scope.addNewTag = function () {
        TagsService.addTag($scope.txtNewTag, {
            onSuccess: function (result) {

                popupMessage("Tag " + $scope.txtNewTag + "Added.");
                loadAllTags();
            },
            onError: function (err) {
                console.log(err);
            }
        });
    };

    $scope.linkTag = function (id) {

        TagsService.linkTag($scope.currentObjectId, $scope.currentObjectType, id, {
            onSuccess: function (result) {
                loadMyTags();
            },
            onError: function (err) {
                console.log(err);
            }
        });

    }

    $scope.unlinkTag = function (id) {

        TagsService.unlinkTag($scope.currentObjectId, $scope.currentObjectType, id, {
            onSuccess: function (result) {
                loadMyTags();
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


    function loadAllTags() {
        TagsService.getAll({
            onSuccess: function (result) {
                $scope.tags = result.data.data;
                $scope.txtNewTag = "";
                $scope.search = "";
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

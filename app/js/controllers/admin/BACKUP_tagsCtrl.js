module.exports = function ($scope, KeywordService, close, id, type, name, $timeout) {
    $scope.currentObjectId = id;
    $scope.currentObjectType = type;
    $scope.currentObjectName = name;
    $scope.myTags = [];
    
    loadMyTags();

    $scope.addNewTag = function () {
        KeywordService.addTag($scope.txtNewTag, {
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
        KeywordService.linkKeyword($scope.currentObjectId, id, {
            onSuccess: function (result) {
                loadMyTags();
            },
            onError: function (err) {
                console.log(err);
            }
        });

    }

    $scope.unlinkTag = function (id) {
        KeywordService.unlinkKeyword($scope.currentObjectId, id, {
            onSuccess: function (result) {
                loadMyTags();
            },
            onError: function (err) {
                console.log(err);
            }
        });

    }

    $scope.deleteTag = function (id) {
        KeywordService.deleteTag(id, {
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
        KeywordService.getTags($scope.currentObjectId, $scope.currentObjectType, {
            onSuccess: function (result) {
                $scope.tags = result.data.data;
            },
            onError: function (err) {
                console.log(err);
            }
        })
    }

    function loadAllTags() {
        KeywordService.getAll({
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

    function loadMyTags() {

        KeywordService.getMyTags($scope.currentObjectId, $scope.currentObjectType, {
            onSuccess: function (result) {
                $scope.myTags = result.data.data;
            },
            onError: function (err) {
                console.log(err);
            }
        })

        KeywordService.getMyList($scope.currentObjectId, $scope.currentObjectType, {
            onSuccess: function (result) {
                $scope.tags = result.data.data;
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

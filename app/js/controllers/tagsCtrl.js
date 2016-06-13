module.exports = function ($scope, TagsService, close, id, type) {

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

    loadTags();

    $scope.addNewTag = function () {
        TagsService.addTag($scope.txtNewTag, {
            onSuccess: function (result) {
                TagsService.getAll({
                    onSuccess: function (result) {
                        debugger;
                        var latestTagId = result.data.data.pop().id;
                        TagsService.linkTag($scope.currentObjectId, $scope.currentObjectType, latestTagId, {
                            onSuccess: function (result) {
                                loadTags();
                            },
                            onError: function (err) {
                                console.log(err);
                            }
                        });
                    },
                    onError: function (err) {
                        console.log(err);
                    }
                });
            },
            onError: function (err) {
                console.log(err);
            }
        });
    }

    $scope.deleteTag = function (id) {
        TagsService.deleteTag(id, {
            onSuccess: function (result) {
                loadTags();
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
};

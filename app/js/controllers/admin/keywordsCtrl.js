module.exports = function ($scope, user, KeywordsService, $timeout) {

    var self = this;
    $scope.currentObjectType = "keyword";
    $scope.confirm = "yes";
    $scope.user = user;

    loadAllKeywords();

    function loadAllKeywords() {
        KeywordsService.getAll({
            onSuccess: function (result) {
                $scope.keywords = result.data.data;
                $scope.txtNewKeyword = "";
                $scope.search = "";
            },
            onError: function (err) {
                console.log(err);
            }
        })
    }

    $scope.setKeyword = function (keyword) {
        KeywordsService.getAlltags(keyword.id, {
            onSuccess: function (result) {
                $scope.tagList = result.data.data;
            },
            onError: function (err) {
            }
        });

        KeywordsService.getkeywordtags(keyword.id, {
            onSuccess: function (result) {
                $scope.keywordTagList = result.data.data;
            },
            onError: function (err) {
            }
        });

        $scope.keyword = keyword;
        $scope.delete = "";
        $scope.confirm = "yes";
    }

    $scope.addNewKeyword = function () {
        var latestId = 0;
        KeywordsService.addkeyword($scope.txtNewKeyword, $scope.descriptionNewKeyword, user.id, {
            onSuccess: function (result) {
                KeywordsService.getAll({
                    onSuccess: function (result) {
                        latestId = result.data.data.pop().id;
                        KeywordsService.getDetails(latestId, {
                            onSuccess: function (result) {
                                loadAllKeywords();
                                $scope.setKeyword(result.data.data[0]);
                                popupMessage("Keyword " + $scope.txtNewKeyword + " Added.");
                                $scope.txtNewKeyword = "";
                                $scope.descriptionNewKeyword = "";
                            },
                            onError: function (err) {
                                console.log(err);
                            }
                        })
                    },
                    onError: function (err) {
                        console.log(err);
                    }
                })
            },
            onError: function (err) {
                console.log(err);
            }
        });
    };

    $scope.linkKeyword = function (id) {
        KeywordsService.linktag($scope.keyword.id, $scope.currentObjectType, id, {
            onSuccess: function (result) {
                //reload data after linking
                $scope.setKeyword($scope.keyword);
            },
            onError: function (err) {
                console.log(err);
            }
        });
    };

    $scope.unlinkKeyword = function (id) {
        KeywordsService.unlinktag($scope.keyword.id, $scope.currentObjectType, id, {
            onSuccess: function (result) {
                //reload data after linking
                $scope.setKeyword($scope.keyword);
            },
            onError: function (err) {
                console.log(err);
            }
        });
    };

    $scope.deleteKeyword = function () {
        $scope.delete = "yes";
        $scope.confirm = "";
    }

    $scope.deleteKeywordConfirm = function () {
        KeywordsService.deletekeyword($scope.keyword.id, {
            onSuccess: function (result) {
                popupMessage("Het trefwoord " + $scope.keyword.keyword + " is succesvol verwijderd.");
                $scope.keyword = null;
                loadAllKeywords();
            },
            onError: function (err) { }
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
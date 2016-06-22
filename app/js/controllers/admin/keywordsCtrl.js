module.exports = function ($scope, user, KeywordService, $timeout) {

    var self = this;
    $scope.currentObjectType = "keyword";
    $scope.confirm = "yes";
    $scope.user = user;

    loadAllKeywords();

    function loadAllKeywords() {
        KeywordService.getAll({
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
        KeywordService.getAlltags(keyword.id, {
            onSuccess: function (result) {
                $scope.tagList = result.data.data;
            },
            onError: function (err) {
            }
        });

        KeywordService.getKeywordTags(keyword.id, {
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
        KeywordService.addKeyword($scope.txtNewKeyword, $scope.descriptionNewKeyword, user.id, {
            onSuccess: function (result) {
                KeywordService.getAll({
                    onSuccess: function (result) {
                        latestId = result.data.data.pop().id;
                        KeywordService.getDetails(latestId, {
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
        KeywordService.linkTag($scope.keyword.id, $scope.currentObjectType, id, {
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
        KeywordService.unlinkTag($scope.keyword.id, $scope.currentObjectType, id, {
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
        KeywordService.deleteKeyword($scope.keyword.id, {
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
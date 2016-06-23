module.exports = function ($http) {
    var baseService = require('../services/baseService')("keyword", $http);
    // var urlBase = "http://127.0.0.1:3000/";
    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';

    return {
        getAll: function (options) {
            $http.get(urlBase + "keyword").then(
                options.onSuccess, options.onError
            );
        },
        getById: function(id) {
            return baseService.getById(id);
        },
        getTags: function (objId, objType, options) {
            $http.get(urlBase + objType + "/" + objId + "/tags").then(
                options.onSuccess, options.onError
            );
        },
        deleteTag: function (id, options) {
            $http.delete(urlBase + "keywords/" + id).then(options.onSuccess, options.onError);
        },
        linkTag: function(keywordId, tagId, options) {
            $http.post(urlBase + "keyword/" + keywordId + "/tags", {
                "Tag_id": tagId
            }).then(options.onSuccess, options.onError);
        },
        unlinkTag: function(keywordId, tagId, options) {
            $http.delete(urlBase + "keyword/" + keywordId + "/tags/" + tagId).then(options.onSuccess, options.onError);
        },
        getMyTags: function (objId, objType, options) {
            $http.get(urlBase + objType + "/" + objId + "/keywords/?linked=true").then(options.onSuccess, options.onError);
        },
        getMyList: function (objId, objType, options) {
            $http.get(urlBase + objType + "/" + objId + "/keywords/?linked=false").then(options.onSuccess, options.onError);
        },
        getKeywords: function (objId, objType, options) {
            $http.get(urlBase + objType + "/" + objId + "/keywords").then(
                options.onSuccess, options.onError
            );
        },
        getKeywordTags: function (objId, options) {
            $http.get(urlBase + "keyword/" + objId + "/tags").then(
                options.onSuccess, options.onError
            );
        },
        getAlltags: function (objId, options) {
            $http.get(urlBase + "keyword/" + objId + "/tags?linked=false").then(
                options.onSuccess, options.onError
            );
        },
        getDetails: function (objId, options) {
            $http.get(urlBase + "keyword/" + objId).then(
                options.onSuccess, options.onError
            );
        },
        addKeyword: function (name, description, userId, options) {
            $http.post(urlBase + "keyword", {
                "keyword": name,
                "description": description,
                "User_id": userId
            }).then(options.onSuccess, options.onError);
        },
        deleteKeyword: function (id, options) {
            $http.delete(urlBase + "keyword/" + id).then(options.onSuccess, options.onError);
        }, linkKeyword: function(id, keywordId, options) {
            $http.post(urlBase + "content/" + id + "/keywords", {
                "Keyword_id": keywordId
            }).then(options.onSuccess, options.onError);

        }, unlinkKeyword: function(id, keywordId, options) {
            $http.delete(urlBase + "content/" + id + "/keywords/" + keywordId).then(options.onSuccess, options.onError);

        }
    };
};

module.exports = function ($http) {

    return {
        getAll: function (options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/keyword").then(
                options.onSuccess, options.onError
            );
        },
        getTags: function (objId, objType, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/tags").then(
                options.onSuccess, options.onError
            );
        },
        deleteTag: function (id, options) {
            $http.delete("http://onderwijskennismakers.herokuapp.com/keywords/" + id).then(options.onSuccess, options.onError);
        },
        linkTag: function (objId, objType, tagId, options) {
            $http.post("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/keywords", {
                "Keyword_id": tagId
            }).then(options.onSuccess, options.onError);
        },
        unlinkTag: function (objId, objType, tagId, options) {
            $http.delete("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/keywords/" + tagId).then(options.onSuccess, options.onError);
        },
        getMyTags: function (objId, objType, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/keywords/?linked=true").then(options.onSuccess, options.onError);
        },
        getMyList: function (objId, objType, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/keywords/?linked=false").then(options.onSuccess, options.onError);
        },
    };
}

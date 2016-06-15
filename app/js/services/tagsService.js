module.exports = function ($http) {

    return {
        getAll: function (options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/tag").then(
                options.onSuccess, options.onError
            );
        },
        getTags: function (objId, objType, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/tags").then(
                options.onSuccess, options.onError
            );
        },
        getDetails: function (objId, objType, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId).then(
                options.onSuccess, options.onError
            );
        },
        getSugTags: function (objId, objType, options) {
            //TODO: Cal; maken
        },
        addTag: function (name, options) {
            $http.post("http://onderwijskennismakers.herokuapp.com/tag", {
                "name": name
            }).then(options.onSuccess, options.onError);
        },
        deleteTag: function (id, options) {
            $http.delete("http://onderwijskennismakers.herokuapp.com/tag/" + id).then(options.onSuccess, options.onError);
        },
        linkTag: function (objId, objType, tagId, options) {
            $http.post("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/tags", {
                "Tag_id": tagId
            }).then(options.onSuccess, options.onError);
        },
        unlinkTag: function (objId, objType, tagId, options) {
            $http.delete("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/tags/" + tagId).then(options.onSuccess, options.onError);
        },
        getMyTags: function (objId, objType, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/tags/?linked=true").then(options.onSuccess, options.onError);
        },
        getMyList: function (objId, objType, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/tags/?linked=false").then(options.onSuccess, options.onError);
        },
    };
}

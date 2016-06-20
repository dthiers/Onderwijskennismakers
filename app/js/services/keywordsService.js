module.exports = function ($http) {

    return {
        getAll: function (options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/keyword").then(
                options.onSuccess, options.onError
            );
        },
        getkeywords: function (objId, objType, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/keywords").then(
                options.onSuccess, options.onError
            );
        },
        getkeywordtags: function (objId, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/keyword/" + objId + "/tags").then(
                options.onSuccess, options.onError
            );
        },
        getAlltags: function (objId, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/keyword/" + objId + "/tags?linked=false").then(
                options.onSuccess, options.onError
            );
        },
        getDetails: function (objId, options) {
            $http.get("http://onderwijskennismakers.herokuapp.com/keyword/" + objId).then(
                options.onSuccess, options.onError
            );
        },
        getSugkeywords: function (objId, objType, userId, options) {
            //TODO: Cal; maken
        },
        addkeyword: function (name, description, userId, options) {
            $http.post("http://onderwijskennismakers.herokuapp.com/keyword", {
                "keyword": name,
                "description": description,
                "User_id": userId
            }).then(options.onSuccess, options.onError);
        },
        deletekeyword: function (id, options) {
            $http.delete("http://onderwijskennismakers.herokuapp.com/keyword/" + id).then(options.onSuccess, options.onError);
        },
        linktag: function (objId, objType, keywordId, options) {
            $http.post("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/tags", {
                "Tag_id": keywordId
            }).then(options.onSuccess, options.onError);
        },
        unlinktag: function (objId, objType, keywordId, options) {
            $http.delete("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/tags/" + keywordId).then(options.onSuccess, options.onError);
        },
    };
}

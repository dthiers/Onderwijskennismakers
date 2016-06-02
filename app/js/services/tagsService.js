module.exports = function ($http) {

    return {
        getTags: function(objId, objType, options){
            $http.get("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId + "/tags").then(
                options.onSuccess, options.onError
            );
        },
        getDetails: function(objId, objType, options){
            $http.get("http://onderwijskennismakers.herokuapp.com/" + objType + "/" + objId).then(
                options.onSuccess, options.onError
            );
        },
        getSugTags: function(objId, objType, options){
            //TODO: Cal; maken
        },
        addTag: function(name, options){
            $http.post("http://onderwijskennismakers.herokuapp.com/tag", {
                name: name
            } ).then( options.onSuccess, options.onError );
        },
        deleteTag: function(id, options){
            $http.delete("http://onderwijskennismakers.herokuapp.com/tag", {
                id: id
            } ).then( options.onSuccess, options.onError );
        }
    };
}

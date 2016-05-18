module.exports = function ($http) {

    var type = 'undefined';
    var newRescource = { name: "", community: "", description: "", type: "", link: "" }

    return {
        getProperty: function () {
            return type;
        },
        setProperty: function(value) {
            type = value;
        },
        searchYoutube: function(query, options){
            $http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBKjwQRCdwjfs1fGyO1rumnfY6sKz0QBfI&part=snippet&maxResults=10&type=video&q=" + query).then(
                options.onSuccess, options.onError
            );
        },
        postImage: function(img, options){

          var req = {
             method: 'POST',
             url: 'https://api.imgur.com/3/image.json',
             headers: {
               Authorization: 'Client-ID b7fc74a624c38ac'
             }, data: img
          }

          $http(req).then(
              options.onSuccess, options.onError
          )
        },
        getCommunities: function(options){
            $http.get("http://onderwijskennismakers.herokuapp.com/community").then(
                options.onSuccess, options.onError
            );
        },
        addResource: function(options){
            console.log(newRescource);
            $http.post("http://onderwijskennismakers.herokuapp.com/content", {
                Type: newRescource.type,
                name: newRescource.name,
                content: "",
                link: newRescource.link,
                User_id: 3,
                Community_id: newRescource.community,
                shortDescription: newRescource.description,
                isFrozen: 0
            } ).then( options.onSuccess, options.onError );
        },
        setResourceDetails: function(name, community, description) {
            newRescource.name = name;
            newRescource.community = community;
            newRescource.description = description;
        },
        setResourceType: function(type) {
            newRescource.type = type;
        },
        setResourceLink: function(link) {
            newRescource.link = link;
        }
    };
}
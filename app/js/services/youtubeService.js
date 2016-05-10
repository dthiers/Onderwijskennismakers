module.exports = function ($http) {

        return {
            search: function(query, options){
                $http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBKjwQRCdwjfs1fGyO1rumnfY6sKz0QBfI&part=snippet&maxResults=10&type=video&q=" + query).then(
                    options.onSuccess, options.onError
                );
            }
        }
    }

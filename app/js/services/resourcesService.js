
module.exports = function ($http) {
    var self = this;

    var type = 'undefined';
    var newRescource = { userId: "", name: "", community: "", description: "", type: "", link: "" }
    self.showPDF = false;
    self.popupStyle = { "top": "20px", "height": "250px" }

    self.getProperty = function () {
        return type;
    }

    self.setProperty = function (value) {
        type = value;
    }

    self.searchYoutube = function (query, options) {
        $http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBKjwQRCdwjfs1fGyO1rumnfY6sKz0QBfI&part=snippet&maxResults=10&type=video&q=" + query).then(
            options.onSuccess, options.onError
        );
    }

    self.postImage = function (img, options) {

        var req = {
            method: 'POST',
            url: 'https://api.imgur.com/3/image.json',
            headers: {
                Authorization: 'Client-ID b7fc74a624c38ac'
            }, data: img
        }
    }

    self.getCommunities = function (options) {
        $http.get("http://onderwijskennismakers.herokuapp.com/community").then(
            options.onSuccess, options.onError
        );
    }

    self.addResource = function (func1, func2) {
        debugger;
        $http.post("http://onderwijskennismakers.herokuapp.com/content", {
            Type: newRescource.type,
            name: newRescource.name,
            content: "",
            link: newRescource.link,
            User_id: newRescource.id,
            Community_id: newRescource.community,
            shortDescription: newRescource.description,
            isFrozen: 0
        }).then(func1, func2);
    }

    self.setResourceDetails = function (name, community, description, id) {
        newRescource.name = name;
        newRescource.community = community;
        newRescource.description = description;
        newRescource.id = id;
    }

    self.setResourceType = function (type) {
        newRescource.type = type;
    }

    self.getResourceType = function (type) {
        return newRescource.type;
    }

    self.setResourceLink = function (link) {
        newRescource.link = link;
    }

    self.setLink = function (link) {
        self.newResourcePreview.link = link
    }

    self.resetValues = function () {
        self.newResourcePreview.name = "Naam";
        self.newResourcePreview.description = "Omschrijving";
        self.newResourcePreview.link = "";
        type = 'undefined';
        newRescource = { userId: "", name: "", community: "", description: "", type: "", link: "" }
        self.showPDF = false;
        self.showYoutube = false;
        self.showWebpage = false;
        self.showImage = false;
        self.popupStyle = { "top": "20px", "height": "250px" }
    }
    
    self.getLatestResource= function(options) {
        $http.get("http://onderwijskennismakers.herokuapp.com/content").then(
            options.onSuccess, options.onError
        );
    }
    
    self.setUserId= function(id) {
        newRescource.userId = id;
    }


    self.newResourcePreview = { name: "Naam", description: "Omschrijving" }

    return self;

}

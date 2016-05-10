module.exports = function (app) {
    app.factory('ProfileService', require('../services/profileService'));
    app.factory('AuthService', require('../services/authService'));
    app.factory('ResourcesService', require('../services/resourcesService'));
    app.factory('YoutubeService', require('../services/youtubeService'));
}

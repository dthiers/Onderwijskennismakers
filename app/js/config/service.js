module.exports = function (app) {
    app.factory('ProfileService', require('../services/profileService'));
    app.factory('KeywordService', require('../services/keywordService'));
    app.factory('AuthService', require('../services/authService'));
}

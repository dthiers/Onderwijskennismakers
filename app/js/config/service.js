module.exports = function (app) {
    app.factory('ProfileService', require('../services/profileService'));
    app.factory('KeywordService', require('../services/keywordService'));
    app.factory('SchoolService', require('../services/schoolService'));
    app.factory('ContentService', require('../services/contentService'));
    app.factory('AuthService', require('../services/authService'));
    app.factory('ResourcesService', require('../services/resourcesService'));
}

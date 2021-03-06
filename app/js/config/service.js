module.exports = function (app) {
    app.factory('ProfileService', require('../services/profileService'));
    app.factory('KeywordService', require('../services/keywordService'));
    app.factory('SchoolService', require('../services/schoolService'));
    app.factory('ContentService', require('../services/contentService'));
    app.factory('AuthService', require('../services/authService'));
    app.factory('ResourcesService', require('../services/resourcesService'));
    app.factory('TagsService', require('../services/tagsService'));
    app.factory('SearchService', require('../services/searchService'));
    app.factory('CommunityService', require('../services/communityService'));
    app.factory('UserService', require('../services/userService'));

    // HTTP inteceptor
    app.factory('HttpInterceptor', require('../services/HttpInterceptor'));
}

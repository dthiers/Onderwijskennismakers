module.exports = function (app) {
    app.factory('ProfileService', require('../services/profileService'));
    app.factory('SchoolService', require('../services/schoolService'));
}
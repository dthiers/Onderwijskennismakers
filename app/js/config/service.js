module.exports = function (app) {
    app.factory('ProfileService', require('../services/profileService'));
    app.factory('AuthService', require('../services/authService'));
}

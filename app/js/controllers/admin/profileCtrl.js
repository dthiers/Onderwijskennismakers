module.exports = function ($scope, user, UserService) {
    var self = this;

    $scope.user = user;

    $scope.saveButtonPressed = function() {
        delete user.createdAt;
        delete user.lastUpdated;
        UserService.userService.updateById(user.id, user);
    }
};
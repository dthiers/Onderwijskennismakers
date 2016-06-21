module.exports = function ($scope, user, UserService, ResourcesService) {
    var self = this;

    $scope.user = user;

    $scope.saveButtonPressed = function() {
        delete user.createdAt;
        delete user.lastUpdated;
        UserService.userService.updateById(user.id, user);
    }

    $scope.file_changed = function (element) {
        $scope.$apply(function (scope) {
            var photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                ResourcesService.postImage(photofile, {
                    onSuccess: function (result) {
                        $scope.user.profileImage = result.data.data.link;
                        $scope.saveButtonPressed();
                    },
                    onError: function (err) {
                        alert('b');
                        console.log(err);
                    }
                });
            };
            reader.readAsDataURL(photofile);
        });
    };
};
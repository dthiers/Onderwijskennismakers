module.exports = function ($scope, $stateParams, ProfileService) {
    $scope.profile = ProfileService.getProfile($stateParams.id);

    $scope.$on('$viewContentLoaded', function (event) {
        resizeProfilePicture();
        highlightRatings($scope.profile.rating);
    });
};

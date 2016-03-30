app.controller('profileCtrl', ['$scope', 'profileService', '$routeParams', function(sc, profileService, routeParams){
  sc.test = "Test";

  sc.profile = profileService.getProfile(routeParams.id);

  sc.$on('$viewContentLoaded', function(event) {
  	resizeProfilePicture();
  	highlightRatings(sc.profile.rating);
  });
}]);

app.controller('webCtrl', ['$scope', 'profileService', '$routeParams', function(sc, profileService, routeParams){

  sc.$on('$viewContentLoaded', function(event) {
    web = new web();
  });
}]);

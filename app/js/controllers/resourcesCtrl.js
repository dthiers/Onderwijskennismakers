module.exports = function ($scope, ResourcesService, YoutubeService) {

  $scope.addResource = function(type){
      $scope.popupStyle = { "top":"20px", "height":"500px" }
      $scope.wrapperStyle = { "margin-top":"20px" }

      switch(type) {
          case "youtube":
              $scope.type = "addYoutube";
              break;
      }
  }

  $scope.$watch(function () { return ResourcesService.getProperty() }, function (newVal, oldVal) {
      $scope.type = ResourcesService.getProperty();
  });

  $scope.searchYoutube = function(){

    $scope.results = [];

    var query = $scope.inputYoutube;

    YoutubeService.search(query, {
        onSuccess: function(result){
            $scope.results = result.data.items;
        },
        onError: function(err){
            console.log(err);
        }
    })

  }

}

module.exports = function ($scope, ResourcesService, ModalService, $timeout, $state, CommunityService, $localStorage, AuthService) {
    var isLeft = true;
    $scope.moveMenu = function(){
        if(isLeft){
            $scope.menuStyle = {left: 'calc(100% - 90px)'};
            $scope.subMenuStyle = {left: 'auto', right: '0px'};
            $scope.subMenuChildrenStyle = {float: 'right'};
            $scope.arrowStyle = {'-ms-transform': 'rotate(180deg)', '-webkit-transform': 'rotate(180deg)', 'transform': 'rotate(180deg)'}
            isLeft = false;
        }else{
            $scope.menuStyle = {left: '30px'};
            $scope.subMenuStyle = {right: 'auto', left: '0px'};
            $scope.subMenuChildrenStyle = {float: 'left'};
            $scope.arrowStyle = {'-ms-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)', 'transform': 'rotate(0deg)'}
            isLeft = true;
        }
    }

    // $scope.openResources = function(){
    //   ResourcesService.setProperty("addResource");
    // }

    $scope.logout = function(){
        $state.go('logout');
    }

    $scope.testAuth = function(){
      AuthService.testAuth({
        onSuccess: function(result) {
          alert(result.data);
          console.log(result.data);
        },
        onError: function(err) {
          console.log(err);
        }
      })
    }

    $scope.openResources = function(){
        ModalService.showModal({
            templateUrl: "../partials/directives/resource_overview_directive.html",
            controller: "ResourcesCtrl"
        }).then(function(modal) {
            modal.close.then(function(result) {
                console.log(result);
            });
        });
    }

    $scope.openTags = function(){
        ModalService.showModal({
            templateUrl: "../partials/directives/tags/tags_directive.html",
            controller: "TagsCtrl",
            inputs: {
                id: "1",
                type: "keyword",
                name:""
              }
        }).then(function(modal) {
            modal.close.then(function(result) {
                console.log(result);
            });
        });
    }

    $scope.getModeratorId = function(id){
        CommunityService.communityService.getModerator(id)//call to service
            .then(function (response) {

                if(response.data.data[0].User_id == parseInt($localStorage.user.id)){
                    console.log("true");
                    $scope.isModerator = true;
                }
                else{
                    console.log("false");
                    $scope.isModerator = false;
                }


            }, function (error) {
                $scope.status = 'Er is iets misgegaan met het laden van de content: ';
                console.log(error);
            });
    }

    $scope.getModeratorId(1);
};

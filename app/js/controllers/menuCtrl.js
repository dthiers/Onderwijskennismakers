module.exports = function ($scope, ResourcesService, ModalService, $timeout, $state) {
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

    $scope.openResources = function(){
        ModalService.showModal({
            templateUrl: "../partials/directives/resource_overview_directive.html",
            controller: "ResourcesCtrl"
        }).then(function(modal) {
            //   modal.close.then(function(result) {
            //     $scope.message = result ? "You said Yes" : "You said No";
            //   });
            modal.close.then(function(result) {
                console.log(result);
            });
        });
    }
};

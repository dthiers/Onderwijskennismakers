module.exports = function ($scope) {
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
};
app.controller('menuCtrl', ['$scope', function(sc){
    var isLeft = true;
    sc.moveMenu = function(){
        if(isLeft){
            sc.menuStyle = {left: 'calc(100% - 90px)'};
            sc.subMenuStyle = {left: 'auto', right: '18px'};
            sc.subMenuChildrenStyle = {float: 'right'};
            sc.arrowStyle = {'-ms-transform': 'rotate(180deg)', '-webkit-transform': 'rotate(180deg)', 'transform': 'rotate(180deg)'}
            isLeft = false;
        }else{
            sc.menuStyle = {left: '30px'};
            sc.subMenuStyle = {right: 'auto', left: '18px'};
            sc.subMenuChildrenStyle = {float: 'left'};
            sc.arrowStyle = {'-ms-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)', 'transform': 'rotate(0deg)'}
            isLeft = true;
        }
    }
}]);
app.controller('dashboardCtrl', ['$scope', function(sc){
    sc.slideDown = function(){
        sc.topBarStyle = {top: '100%'};
        sc.topContentStyle = {top: '0%'};
    }
    sc.slideUp = function(){
        sc.topBarStyle = {top: '0%'};
        sc.topContentStyle = {top: '-100%'};
    }
}]);

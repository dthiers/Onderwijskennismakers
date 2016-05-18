module.exports = function ($scope) {

	    $scope.slideDown = function(){
	        $scope.topBarStyle = {top: '100%'};
	        $scope.topContentStyle = {top: '0%'};
	    }
	    $scope.slideUp = function(){
	        $scope.topBarStyle = {top: '0%'};
	        $scope.topContentStyle = {top: '-100%'};
	    }

};
module.exports = function ($scope, ProfileService) {

    
    //geting the user using state params
    getUser();

    function getUser() {//based on state params
        ProfileService.getUser(2)//call to service hard coded user 2 = TJ van Os TODO: $stateParams.id
            .then(function (response) {
                $scope.user=response.data.data[0];//set response to scope
                console.dir($scope);
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }
	
	    $scope.slideDown = function(){
	        $scope.topBarStyle = {top: '100%'};
	        $scope.topContentStyle = {top: '0%'};
	    }
	    $scope.slideUp = function(){
	        $scope.topBarStyle = {top: '0%'};
	        $scope.topContentStyle = {top: '-100%'};
	    }

};
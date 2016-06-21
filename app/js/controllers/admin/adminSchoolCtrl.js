module.exports = function ($scope, user, ResourcesService, SchoolService, $timeout, ProfileService) {

    var self = this;

    $scope.user = user;

    $scope.progress = "schoolList";

    self.getUsers = function(){
    	ProfileService.profileService.getAll()
	        .then(function (result) {
				$scope.users = result.data.data;
	        }, function (error) {
	            console.log(err);
	        });
    }

    self.getSchools = function(){
        SchoolService.schoolService.getAll()
            .then(function (result) {
                $scope.schools = result.data.data;
            }, function (error) {
                console.log(err);
            });
    }

    $scope.file_changed = function (element) {
        $scope.$apply(function (scope) {
            var photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                ResourcesService.postImage(photofile, {
                    onSuccess: function (result) {
                        $scope.school.logo = result.data.data.link;
                    },
                    onError: function (err) {
                        console.log(err);
                    }
                });
            };
            reader.readAsDataURL(photofile);
        });
    };

  	$scope.registerSchool = function(school){
  		if($scope.school.logo == null){
  			popupMessage("Voeg een logo toe!");
  			return;
  		}
        SchoolService.schoolService.addSchool(school, {//call to service
        	onSuccess: function (result) {
                popupMessage($scope.school.name + " is succesvol geregistreerd");
            },
            onError: function (err) {
                popupMessage("Er is iets misgegaan bij het toevoegen van de school");
                console.log(err.message);
            }
        });
  	}

  	function popupMessage(message){
        $scope.message = message;
        $(".popup_message").addClass("flash_popup"); 
        $timeout(function(){
            $(".popup_message").removeClass("flash_popup"); 
        }, 3000);  
        
    }

    self.getUsers();
    self.getSchools();

};